<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import LayerGroup from '$lib/components/other-layers/LayerGroup.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';
	import Polygon from '$lib/components/vector-layers/Polygon.svelte';
	import type { DrawLayerType } from '$lib/types/DrawLayerTypes.js';
	import { layerToGeojson } from '$lib/util/draw-helpers.js';
	import type LType from 'leaflet';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

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

	const wyBorderCoor = [
		[45.011419, -111.060791],
		[41.004775, -111.060791],
		[41.004775, -104.0625],
		[45.003651, -104.0625],
		[45.011419, -111.060791]
	];
	let L: typeof LType;
	let formattedGeojsonStr: string = '';
	let geojsonRenderer: HTMLElement;

	$: if (geojsonRenderer) {
		geojsonRenderer.innerText = formattedGeojsonStr;
	}

	const onMapReady = (map: LType.Map) => {
		map.on('draw:created', (e: any) => {
			const layer: L.Layer = e.layer;
			const layerType: DrawLayerType = e.layerType;
			formattedGeojsonStr = JSON.stringify(layerToGeojson(layer, layerType), undefined, 2);
		});
	};

	// const addLayer = (layerGroup: L.LayerGroup) => {
	// 	layerGroup.eachLayer((layer) => {
	// 		layer.bindPopup(L.popup({ content: 'State Border' }));
	// 	});
	// };
</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="example">
	<div class="debug-map-container">
		<Leaflet options={mapOption} bind:Leaflet={L} {onMapReady} enableDraw>
			<TileLayer tileURL={mapURL} options={tileLayerOption} />
			<!-- <LayerGroup onLayerGroupReady={addLayer}>
				<Polygon latLngs={utahBorderCoor} />
				<Polygon latLngs={wyBorderCoor} />
			</LayerGroup> -->
			<!-- <Polygon latLngs={coloradoBorderCoor}>
				<Tooltip options={{ direction: 'top' }}>Colorado</Tooltip>
			</Polygon> -->
		</Leaflet>
	</div>

	<div class="debug-view">
		{#if formattedGeojsonStr}
			<p style="margin: 0;">GeoJSON created:</p>
			<pre bind:this={geojsonRenderer} id="geojson-renderer" />
		{/if}
	</div>
</div>

<style>
	.debug-map-container {
		height: 400px;
	}

	.debug-view {
		height: 40vh;
		font-family: 'Overpass Variable', sans-serif;
		padding: 1em;
		overflow-x: hidden;
		overflow-y: auto;
	}

	#geojson-renderer {
		font-family: 'Fira Mono', 'Ubuntu Mono', monospace;
		font-size: 13px;
		line-height: 1.4;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		background: #f6fafd;
		color: #5e6687;
	}
</style>
