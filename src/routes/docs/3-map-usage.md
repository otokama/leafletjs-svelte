---
title: Leaflet
category: Basemap
order: 3
---
<script>
  import MapUsage from '/src/common/sample/MapUsage.svelte';
</script>

# Base Map

### Leaflet Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `options` | [`L.MapOptions`](https://leafletjs.com/reference.html#map-option) | `undefined` | Describes the property of the Map. | `false` |
| `bounds` | [`L.LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) | `undefined` | Fit the map to the specified bounds. | `false` |
| `height` | string | `100%` | The height of the map in a map container. Make sure the map container or the map has a defined height. | `false` |
| `width` | string | `100%` | The width of the map in a map container. | `false` |
| `enableDraw` | `boolean` | `false` | Enables basic draw tool | `false` |
| `drawOptions` | [`Control.Draw`](https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#control-draw) | `undefined` | Options to configure the draw plugin | `false` |
| `onMapReady` | `(map: L.Map) => void` | `undefined` | A callback function which is called when the map has been mounted | `false` |
| `Leaflet` | L | `undefined` | The Leaflet namespace that encapsulates the core functionality and classes provided by the Leaflet library. You can use two way binding to get access to the Leaflet namespace. | `false` |
| `map` | [`L.Map`](https://leafletjs.com/reference.html#map) | `undefined` | The underlying Leaflet Map object instance. | `false` |


</div>

<br>

## Usage
Below is a minimal effort to setup a Leaflet map:

<div class='example'>

  <MapUsage/>

  ```Svelte
  <script>
    import {
      Leaflet,
      TileLayer
    } from 'leafletjs-svelte';
    
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
    <Leaflet options={mapOption}>
      <TileLayer tileURL={mapURL} options={tileLayerOption} />
    </Leaflet>
  </div>

  <style>
    .map-container {
      height: 300px;
      width: 100%;
    }
  </style>
  ```

</div>