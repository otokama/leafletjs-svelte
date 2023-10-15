<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import type { DrawLayerType } from '$lib/types/DrawLayerTypes.js';
	import { satelliteImageryURL } from '$lib/util/mapUtils.js';
	import type LType from 'leaflet';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

	const mapOption: MapOptions = {
		center: [47.615884, -122.189426],
		zoom: 12
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
		maxNativeZoom: 20,
		maxZoom: 19
	};

	let L: typeof LType;

	const onMapReady = (map: LType.Map) => {
		map.on('draw:created', (e: any) => {
			const layer: L.Layer = e.layer;
			const layerType: DrawLayerType = e.layerType;
			layer.bindTooltip(layerType);
		});
	};
</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="map-container draw-container">
	<Leaflet options={mapOption} bind:Leaflet={L} enableDraw {onMapReady}>
		<TileLayer tileURL={satelliteImageryURL} options={tileLayerOption} />
	</Leaflet>
</div>

<style>
	.draw-container {
		min-height: 450px;
	}
</style>
