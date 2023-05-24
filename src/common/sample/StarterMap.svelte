<script lang='ts'>
  import type {
    Map,
    MapOptions,
    TileLayerOptions
  } from 'leaflet';
  import Leaflet from '$lib/components/Leaflet.svelte';
  import TileLayer from '$lib/components/TileLayer.svelte';

  let map: Map;
  const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 13
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

<div class='map-container'>
  <Leaflet bind:map={map} options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
  </Leaflet>
</div>