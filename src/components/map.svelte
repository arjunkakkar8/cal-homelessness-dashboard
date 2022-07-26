<script lang="ts">
	import ModuleContainer from '$components/module-container.svelte';
	import { overall_data } from '$stores/data';
	import { geography, geography_options, race_options } from '$stores/selectors';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import shapefile from '../data/ca_county_shapefile.json?raw';
	import 'leaflet/dist/leaflet.css';
	import type { Map, GeoJSON, Layer, LeafletEvent, FeatureGroup } from 'leaflet';
	import type { Feature } from 'geojson';

	let container: HTMLDivElement, map: Map, shapes: GeoJSON;

	const style = () => {
		return { weight: 1, fillOpacity: 0.7 };
	};

	const highlightFeature = (feature: FeatureGroup) => {
		feature.setStyle({
			weight: 2,
			color: '#666',
			fillOpacity: 0.7
		});

		feature.bringToFront();
	};

	const resetHighlight = (feature: FeatureGroup) => {
		if (feature.feature?.properties?.NAME === $geography) {
			return;
		}
		shapes.resetStyle(feature);
	};

	const zoomToFeature = (feature: FeatureGroup) => {
		map.flyToBounds(feature.getBounds());
	};

	const click = (feature: FeatureGroup) => {
		shapes.resetStyle();
		console.log(feature);
		zoomToFeature(feature);
		highlightFeature(feature);
		geography.set(feature.feature?.properties?.NAME || 'Statewide data');
	};

	const onEachFeature = (feature: Feature, layer: Layer) => {
		layer.on({
			mouseover: (e: LeafletEvent) => highlightFeature(e.target),
			mouseout: (e: LeafletEvent) => resetHighlight(e.target),
			click: (e: LeafletEvent) => click(e.target)
		});
	};

	onMount(async () => {
		if (browser) {
			const L = await import('leaflet');
			map = L.map(container, {
				minZoom: 6,
				maxZoom: 10,
				maxBounds: [
					[42.9, -113.7],
					[30.56, -125.6]
				]
			}).setView([36.973398, -119.631893], 6);
			shapes = L.geoJSON(JSON.parse(shapefile), {
				style: style,
				onEachFeature: onEachFeature
			}).addTo(map);
		}
	});

	// $: console.log($overall_data);
	// $: console.log($geography_options);
	// $: console.log($race_options);

	// $: if ($geography) map.fireEvent('click', {});
	$: if (shapes) {
		if ($geography === 'Statewide data') {
			shapes.resetStyle();
			map.setView([36.973398, -119.631893], 6);
		} else {
			const feature: FeatureGroup = Object.values(shapes['_layers']).filter(
				(layer: Layer) => layer.feature.properties?.NAME === $geography
			)[0];
			click(feature);
		}
	}
</script>

<ModuleContainer title="map">
	<div id="map-container" bind:this={container} />
</ModuleContainer>

<style lang="scss">
	#map-container {
		height: 100%;
		background-color: $white;
	}
</style>
