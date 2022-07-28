import { csvParse } from 'd3-dsv';
import { readable, derived, writable } from 'svelte/store';
import raw from '../data/homeless_estimates.csv?raw';

interface DataRow {
	county: string;
	race: string;
	estimated_total: string;
	total: string;
	doubledup: string;
}

// Define all the global states and data
export const overall_data = readable(csvParse(raw) as DataRow[]);
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
	[overall_data, geography, race],
	([$data, $geography, $race]) => {
		let filtered_data = $data;
		const output = {
			estimate: 0,
			total: 0,
			doubledup: 0,
			pit: 0,
			rate: 0
		};

		if ($geography !== 'Statewide data') {
			filtered_data = filtered_data.filter((row) => row.county === $geography);
		}

		if ($race !== 'all races') {
			filtered_data = filtered_data.filter((row) => row.race === $race);
		}

		filtered_data.forEach((row) => {
			output.estimate += Number(row.estimated_total) || 0;
			output.total += Number(row.total) || 0;
			output.doubledup += Number(row.doubledup) || 0;
		});

		output.rate = output.estimate / output.total || 0;

		return output;
	}
);
