import { readable, derived } from 'svelte/store';
import { race } from '$stores/data';

export const color_list = readable({
	'all races': ['#B9E4FD', '#2ea0d6', '#00446B'],
	White: ['#AFFAEF', '#00BAA5', '#006658'],
	Latino: ['#ADF0C8', '#009E52', '#005724'],
	Black: ['#FFF7A8', '#F2CB2F', '#946500'],
	AAPI: ['#FFDCAD', '#F59127', '#9E4100'],
	AIAN: ['#DEFFA3', '#8CCA08', '#4C7700'],
	'Two or More': ['#FFB3B3', '#E94A3F', '#750000'],
	Other: ['#FFC2DB', '#E7558B', '#8A1A45']
});

export const choropleth_color_range = derived(
	[color_list, race],
	([$colors, $selector]) => {
		const list = $colors[$selector as keyof typeof $colors];
		return [list[0], list[2]];
	},
	['#D9F1FF', '#2ea0d6', '#00446B']
);

export const theme_color = derived(
	[color_list, race],
	([$colors, $selector]) => {
		return $colors[$selector as keyof typeof $colors][1];
	},
	'#2ea0d6'
);
