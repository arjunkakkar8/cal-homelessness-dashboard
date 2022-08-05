import { csvParse } from 'd3-dsv';
import { readable, derived, writable } from 'svelte/store';
import overallRaw from '../data/homeless_estimates.csv?raw';
import pitRaw from '../data/pit_count.csv?raw';

interface DataRow {
	county: string;
	race: string;
	estimated_total: string;
	total: string;
	doubledup: string;
	estimated_prop: string;
	total_prop: string;
	doubledup_prop: string;
}

interface PitRow {
	county: string;
	pit: string;
	source: string;
	disclaimer: string;
}

// Define all the global states and data
export const overall_data = readable(csvParse(overallRaw) as DataRow[]);
export const pit_data = readable(csvParse(pitRaw) as PitRow[]);
export const geography = writable('Statewide data');
export const race = writable('all races');

// Compute derived stores for the rest of the application
export const geography_options = derived(
	overall_data,
	($data) => {
		return ['Statewide data', ...new Set($data.map((d) => d['county']))];
	},
	['Statewide data']
);

export const race_options = derived(
	[overall_data, geography],
	([$data, $geography]) => {
		if ($geography === 'Statewide data') {
			return [
				'all races',
				...new Set($data.filter((d) => d.race !== 'Other').map((d) => d['race']))
			];
		} else {
			return [
				'all races',
				...new Set(
					$data.filter((d) => d.county === $geography && d.race !== 'Other').map((d) => d['race'])
				)
			];
		}
	},
	['all races']
);

export const choropleth_data = derived(
	[overall_data, race],
	([$data, $race]) => {
		let output: any = {};

		if ($race === 'all races') {
			$data.forEach((row) => {
				const county = row.county;
				if (county === 'California') return;
				if (!output[county]) {
					output[county] = {
						estimate: Number(row.estimated_total) || 0,
						total: Number(row.total) || 0
					};
				} else {
					output[row.county].estimate += Number(row.estimated_total) || 0;
					output[row.county].total += Number(row.total) || 0;
				}
			});
		} else {
			$data.forEach((row) => {
				if (row.race === $race) {
					output[row.county] = {
						estimate: Number(row.estimated_total) || 0,
						total: Number(row.total) || 0
					};
				}
			});
		}

		Object.values(output).forEach((value: any) => {
			value.rate = value.estimate / value.total || 0;
		});

		return output;
	},
	{}
);

export const snapshot_data = derived(
	[overall_data, pit_data, geography, race],
	([$data, $pit, $geography, $race]) => {
		let filtered_data = $data;
		let pit;
		const output = {
			estimate: 0,
			total: 0,
			doubledup: 0,
			pit: 0,
			rate: 0,
			pit_source: '',
			pit_disclaimer: ''
		};

		if ($geography !== 'Statewide data') {
			filtered_data = filtered_data.filter((row) => row.county === $geography);
			pit = $pit.filter((row) => row.county === $geography)[0];
		} else {
			filtered_data = filtered_data.filter((row) => row.county === 'California');
			pit = $pit.filter((row) => row.county === 'California')[0];
		}

		if ($race !== 'all races') {
			filtered_data = filtered_data.filter((row) => row.race === $race);
		}

		filtered_data.forEach((row) => {
			output.estimate += Number(row.estimated_total) || 0;
			output.total += Number(row.total) || 0;
			output.doubledup += Number(row.doubledup) || 0;
		});

		output.pit = Number(pit.pit) || 0;
		output.pit_source = pit.source;
		output.pit_disclaimer = pit.disclaimer;
		output.rate = output.estimate / output.total || 0;

		return output;
	}
);

export const breakdown_data = derived(
	[overall_data, geography],
	([$data, $geography]) => {
		let filtered_data = $data;
		let output: any = {
			estimated: { White: 0, Latino: 0, Black: 0, AAPI: 0, AIAN: 0, 'Two or More': 0, Other: 0 },
			doubledup: { White: 0, Latino: 0, Black: 0, AAPI: 0, AIAN: 0, 'Two or More': 0, Other: 0 },
			total: { White: 0, Latino: 0, Black: 0, AAPI: 0, AIAN: 0, 'Two or More': 0, Other: 0 }
		};

		if ($geography === 'Statewide data') {
			filtered_data = filtered_data.filter((row) => row.county === 'California');
		} else {
			filtered_data = filtered_data.filter((row) => row.county === $geography);
		}

		filtered_data.forEach((row) => {
			output.estimated[row.race] = Number(row.estimated_prop) || 0;
			output.doubledup[row.race] = Number(row.doubledup_prop) || 0;
			output.total[row.race] = Number(row.total_prop) || 0;
		});

		return output;
	},

	{}
);
