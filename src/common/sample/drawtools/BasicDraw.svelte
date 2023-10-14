<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import type { DrawLayerType } from '$lib/types/DrawLayerTypes.js';
	import { mapTilerURL } from '$lib/util/mapUtils.js';
	import type LType from 'leaflet';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

	const mapOption: MapOptions = {
		center: [39.554883059924016, -111.55517578125001],
		zoom: 6
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
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
		<TileLayer tileURL={mapTilerURL} options={tileLayerOption} />
	</Leaflet>
</div>

<style>
	.draw-container {
		min-height: 390px;
	}
</style>
