---
title: Installation
category: Getting Started
order: 1
---
<script>
  import BaseMap from '/src/common/BaseMap.svelte';
</script>
# Installation

Make sure you have at least `node v14.0` installed.

```Bash
$ npm i leafletjs-svelte
```

## Component Import

```Svelte
<script lang='ts'>
  import type {
    Map,
    MapOptions,
    TileLayerOptions
  } from 'leaflet';
  import Leaflet from '$lib/components/Leaflet.svelte';
  import TileLayer from '$lib/components/TileLayer.svelte';


  let map: Map;
  const mapURL = 'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key={API_KEY}';
  const mapOption: MapOptions = {
    center: [40.7249822, -74.006205],
    zoom: 13
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">
    &copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">
    &copy; OpenStreetMap contributors</a>`,
    maxNativeZoom: 20,
    maxZoom: 23 
  };
  
</script>

<div 
  class='map-container'
>
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
  </Leaflet>
</div>
```
<br><br><br>

<BaseMap/>