<script lang="ts">
	import ModuleContainer from '$lib/components/index/module-container.svelte';
	import Hover from '$lib/components/index/hover.svelte';
	import { choropleth_data, geography } from '$lib/stores/data';
	import { choropleth_color_range } from '$lib/stores/colors';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import shapefile from '$lib/data/ca_county_shapefile.json?raw';
	import { scaleLinear } from 'd3-scale';
	import { format } from 'd3-format';
	import 'leaflet/dist/leaflet.css';
	import type { Map, GeoJSON, Layer, LeafletEvent, FeatureGroup, DomEvent } from 'leaflet';
	import type { Feature } from 'geojson';

	let container: HTMLDivElement, map: Map, shapes: GeoJSON;
	let countyName = '',
		countyEstimate = '',
		countyRate = '',
		countyTotal = '',
		hoverActive = false;

	const style = (feature: Feature) => {
		const countyData = $choropleth_data[feature?.properties?.NAME];
		const colorScale = scaleLinear([0, 0.25], $choropleth_color_range);

		const styleData = {
			weight: 1,
			fillOpacity: 0.7,
			fillColor: '#00000020',
			color: '#000',
			opacity: 0.1
		};

		if (countyData) styleData.fillColor = colorScale(countyData.rate);

		return styleData;
	};

	const highlightFeature = (feature: FeatureGroup) => {
		const countyData = $choropleth_data[feature.feature?.properties?.NAME];

		if (countyData) {
			hoverActive = true;
			countyName = feature.feature?.properties?.NAME;
			countyEstimate = format('.3s')(countyData.estimate);
			countyRate = format('.1%')(countyData.rate);
			countyTotal = format('.3s')(countyData.total);

			feature.setStyle({
				weight: 2,
				fillOpacity: 1,
				opacity: 0.7
			});

			feature.bringToFront();
		}
	};

	const resetHighlight = (feature: FeatureGroup) => {
		hoverActive = false;

		if (feature.feature?.properties?.NAME === $geography) return;

		shapes.resetStyle(feature);
	};

	const zoomToFeature = (feature: FeatureGroup) => {
		map.flyToBounds(feature.getBounds());
	};

	const click = (feature: FeatureGroup) => {
		if ($choropleth_data[feature.feature?.properties?.NAME]) {
			shapes.resetStyle();
			zoomToFeature(feature);
			highlightFeature(feature);
			geography.set(feature.feature?.properties?.NAME || 'Statewide data');
		}
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
				],
				attributionControl: false
			}).setView([36.973398, -119.631893], 6);

			L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);

			map.zoomControl.setPosition('bottomleft');

			shapes = L.geoJSON(JSON.parse(shapefile), {
				style: style,
				onEachFeature: onEachFeature
			}).addTo(map);
		}
	});

	$: $choropleth_data, shapes?.resetStyle();

	$: {
		$choropleth_data;
		if (shapes) {
			if ($geography === 'Statewide data') {
				shapes.resetStyle();
				map.setView([36.973398, -119.631893], 6);
			} else {
				const feature = Object.values(shapes['_layers'] as FeatureGroup).filter(
					(layer) => layer.feature?.properties?.NAME === $geography
				)[0];
				click(feature);
			}
		}
		hoverActive = false;
	}
</script>

<ModuleContainer title="map">
	<Hover {hoverActive}>
		<span slot="content">
			<div id="map-container" bind:this={container} />
		</span>
		<span slot="hover">
			<h3>{countyName}</h3>
			<div class="hover-wrapper">
				<div>
					<h4>Housing Insecure</h4>
					<p>{countyEstimate}</p>
				</div>
				<div>
					<h4>Rate of Insecurity</h4>
					<p>{countyRate}</p>
				</div>
				<div>
					<h4>Total Population</h4>
					<p>{countyTotal}</p>
				</div>
			</div>
		</span>
	</Hover>
</ModuleContainer>

<style lang="scss">
	#map-container {
		height: 100%;
		min-height: 500px;
		background-color: $white;

		:global(path) {
			transition: fill 0.5s ease-in-out;
		}
	}

	.hover-wrapper {
		display: flex;

		div:not(:last-of-type) {
			margin-right: 12px;
		}

		div {
			width: fit-content;
		}
	}

	h3 {
		@include label-large;
		font-weight: 600;
		margin: 0 0 16px;
		border-bottom: 4px solid var(--theme-color);
		line-height: 16px;
		width: fit-content;
	}

	h4 {
		@include heading-xxxsmall;
		color: $gray;
		margin: 0 0 4px;
		width: 100px;
	}

	p {
		@include heading-xsmall;
		margin: 0;
	}
</style>
