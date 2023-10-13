<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import LayerGroup from '$lib/components/other-layers/LayerGroup.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';
	import Polygon from '$lib/components/vector-layers/Polygon.svelte';
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';
	import type L from 'leaflet/index.js';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [39.554883059924016, -111.55517578125001],
		zoom: 6
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const utahBorderCoor = [
		[42.000325, -114.049072],
		[42.008489, -111.060791],
		[40.996484, -111.060791],
		[41.004775, -109.061279],
		[37.011326, -109.061279],
		[37.011326, -114.060059]
	];
	const coloradoBorderCoor = [
		[41.004775, -109.083252],
		[41.004775, -102.062988],
		[37.002553, -102.041016],
		[37.011326, -109.050293],
		[41.004775, -109.083252]
	];
	let leaflet: typeof L;
	let layerGroup: L.LayerGroup;

	$: if (layerGroup && leaflet) {
		layerGroup.eachLayer((layer) => {
			layer.bindPopup(leaflet.popup({ content: 'State Border' }));
		});
	}
</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="map-container">
	<Leaflet bind:map options={mapOption} bind:Leaflet={leaflet}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
		<LayerGroup bind:layerGroup>
			<Polygon latLngs={utahBorderCoor} />
		</LayerGroup>
		<Polygon latLngs={coloradoBorderCoor}>
			<Tooltip options={{ direction: 'top' }}>Colorado</Tooltip>
		</Polygon>
	</Leaflet>
</div>

<style>
	.map-container {
		height: 550px;
		min-width: 600px;
		margin: 0.5em 1em;
		box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 1rem;
	}
</style>
