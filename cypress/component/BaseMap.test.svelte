<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';
	import Leaflet from '../../src/lib/components/Leaflet.svelte';
	import TileLayer from '../../src/lib/components/raster-layers/TileLayer.svelte';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [40.7249822, -74.006205],
		zoom: 11
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>
      &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};
</script>

<div style="height: 100vh; width: 100%;">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
	</Leaflet>
</div>
