<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Marker from '$lib/components/ui-layers/Marker.svelte';
  import Popup from '$lib/components/ui-layers/Popup.svelte';
  import '/src/styles/style.css';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 10
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

<div class="map-container">
  <Leaflet bind:map options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
  
    <Marker latLng={[40.7249822, -74.006205]}>
      <Popup options={{content: '<p>This is New York</p>'}} />
    </Marker>
  
    <Marker latLng={[40.6501, -73.9495800]} >
      <Popup>
        <p>This is Brooklyn</p>
      </Popup>
    </Marker>
  
  </Leaflet>
</div>