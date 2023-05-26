---
  title: TileLayer.WMS
  category: Raster Layers
  order: 8
---
<script>
  import TileLayerWmsUsage from '/src/common/sample/tilelayer/TileLayerWMSUsage.svelte';
</script>

# TileLayer.WMS

Used to display WMS services as tile layers on the map.

### TileLayer Properties

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `tileURL` | `string` | `undefined` | TileLayer's URL template | `true` | 
| `options` | [`WMSOptions`](https://leafletjs.com/reference.html#tilelayer-wms-option) | `undefined` | Describes the property of the TileLayer.WMS. | `true` |
| `tileLayer` | [`TileLayer.WMS`](https://leafletjs.com/reference.html#tilelayer-wms) | `undefined` | The underlying Leaflet TileLayer.WMS object instance. | `false` |

<br>

## Example
<div class='example'>

  <TileLayerWmsUsage />

  ```svelte
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <TileLayerWms
      tileURL="https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi?"
      options={{
        layers: 'mrms_p72h',
        format: 'image/png',
        transparent: true,
        attribution: "Weather data © 2023 IEM MRMS",
        opacity: 0.37
      }}
    />
  </Leaflet>
  ```

</div>