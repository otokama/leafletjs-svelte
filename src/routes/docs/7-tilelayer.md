---
  title: TileLayer
  category: Raster Layers
  order: 7
---
<script>
  import MapUsage from '/src/common/sample/MapUsage.svelte';
</script>

# TileLayer

Used to load and display tile layers on the map.

### TileLayer Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `tileURL` | `string` | `undefined` | TileLayer's URL template | `true` | 
| `options` | [`TileLayerOptions`](https://leafletjs.com/reference.html#tilelayer) | `undefined` | Describes the property of the TileLayer. | `true` |
| `tileLayer` | [`TileLayer`](https://leafletjs.com/reference.html#tilelayer) | `undefined` | The underlying Leaflet TileLayer object instance. | `false` |

</div>

<br>

## Example
<div class='example'>

  <MapUsage/>

  ```svelte
  <script>
    import { Leaflet, TileLayer } from 'leafletjs-svelte';

    const tileLayerOption = {
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

  ```

</div>