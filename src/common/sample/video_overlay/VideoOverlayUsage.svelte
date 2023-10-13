<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import VideoOverlay from '$lib/components/raster-layers/VideoOverlay.svelte';
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [22.755920681486405, -114.65332031250001],
		zoom: 4
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm';
	const videoBounds = [
		[32, -130],
		[13, -100]
	];
</script>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
		<VideoOverlay video={videoUrl} bounds={videoBounds} />
	</Leaflet>
</div>
