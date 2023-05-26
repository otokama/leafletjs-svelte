<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions, IconOptions } from 'leaflet';
  import L from 'leaflet';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Marker from '$lib/components/ui-layers/Marker.svelte';
  import Popup from '$lib/components/ui-layers/Popup.svelte';
  import '/src/styles/style.css';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 11
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: 'abcd'
  };

</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Marker latLng={L.latLng([40.6501, -73.9495800])} >
      <Popup>
        <p>This is Brooklyn</p>
      </Popup>
    </Marker>

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