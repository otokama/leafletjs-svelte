<script lang='ts'>
  import 'leaflet/dist/leaflet.css';
  import type {
    Map,
    MapOptions,
    TileLayerOptions
  } from 'leaflet';
  import Leaflet from '$lib/components/Leaflet.svelte';
  import TileLayer from '$lib/components/TileLayer.svelte';
  
  let map: Map;
  const mapURL = 'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=5RRPejawRNE6xUzV3e5M';
  const satelliteURL = 'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=f9BfrPfH9duxJflw5vTh';
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 13
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
    maxNativeZoom: 20,
    maxZoom: 23 
  };

</script>

<svelte:head>
  <title>
    Sandbox - leafletjs-svelte
  </title>
</svelte:head>
<div class='w-full h-[100vh]'>
  <Leaflet options={mapOption}>
    <TileLayer tileURL={satelliteURL} options={tileLayerOption} />
  </Leaflet>
</div>