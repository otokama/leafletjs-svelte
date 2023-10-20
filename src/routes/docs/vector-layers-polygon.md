---
title: Polygon
category: Vector Layers
order: 2
---

<script>
  import PolygonUsage from '/src/common/sample/polygon/PolygonUsage.svelte';
</script>

# Polygon

Drawing polygon overlays on a map.

### Polygon Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `latLngs` | [`LatLng[]`](https://leafletjs.com/reference.html#latlng) | `undefined` | An array of geographical points (latitude and longitude). | `true` | 
| `options` | [`PolygonOptions`](https://leafletjs.com/reference.html#polyline-option) | `undefined` | Describes the property of the Polygon. Extended from Polyline. | `false` |
| `polygon` | [`Polygon`](https://leafletjs.com/reference.html#polygon) | `undefined` | The underlying Leaflet Polygon object instance. | `false` |

</div>
<br>

## Example

<div class='example'>
  <PolygonUsage />

  ```svelte
  <Leaflet options={mapOption} >
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Polygon options={{ color: 'purple' }} latLngs={utahBorderCoor}>
      <Popup>
        <strong>Utah</strong>
      </Popup>
    </Polygon>

    <Polygon options={{ color: 'blue' }} latLngs={coloradoBorderCoor}>
      <Tooltip>Colorado</Tooltip>
    </Polygon>
  </Leaflet>
  ```

</div>