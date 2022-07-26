import { writable, derived } from 'svelte/store';
import { overall_data } from '$stores/data';

export const geography = writable('Statewide data');
export const race = writable('all races');

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
			return ['all races', ...new Set($data.map((d) => d['race']))];
		} else {
			return [
				'all races',
				...new Set($data.filter((d) => d.county === $geography).map((d) => d['race']))
			];
		}
	},
	['all races']
);
