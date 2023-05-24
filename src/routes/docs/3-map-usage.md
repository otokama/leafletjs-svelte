---
title: Usage
category: Map
order: 3
---
<script>
  import MapUsage from '/src/common/sample/MapUsage.svelte';
</script>

# Map

## Usage Example
Below is a minimal effort to setup a Leaflet map:
```Svelte
<script>
  import {
    Leaflet,
    TileLayer
  } from 'leafletjs-svelte';

  let map: Map;
  
  const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 13
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

<div class='map-container'>
  <Leaflet bind:map={map} options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
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
```
<br><br>
<MapUsage/>