<script lang="ts">
	import type { MapOptions, TileLayerOptions } from 'leaflet';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
  import Circle from '$lib/components/vector-layers/Circle.svelte';
  import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';

  let map: L.Map;
  const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [47.60621, -122.33207],
    zoom: 12
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: 'abcd'
  };


</script>

<div class="map-container">
	<Leaflet options={mapOption} bind:map={map}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
    <Circle latLng={[47.61322, -122.3465]} options={{radius: 700, color: 'red'}} />

    <Circle latLng={[47.600164266, -122.288998844]} options={{radius: 800}}>
      <Tooltip options={{ content: 'Leschi, Seattle' }} />
    </Circle>

  </Leaflet>
</div>