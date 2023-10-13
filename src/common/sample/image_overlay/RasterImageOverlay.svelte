<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import ImageOverlay from '$lib/components/raster-layers/ImageOverlay.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [40.743657, -74.1723667],
		zoom: 12
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};
	const imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
	const imageBounds = [
		[40.712216, -74.22655],
		[40.773941, -74.12544]
	];
	const imageOverlayOptions = { opacity: 0.7 };
</script>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
		<ImageOverlay {imageUrl} bounds={imageBounds} options={imageOverlayOptions} />
	</Leaflet>
</div>
