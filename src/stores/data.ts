import { csvParse } from 'd3-dsv';
import { readable, derived } from 'svelte/store';
import raw from '../data/homeless_estimates.csv?raw';
// import { geography } from '$stores/selectors';

export const overall_data = readable(csvParse(raw));

// export const choropleth_data = derived();
