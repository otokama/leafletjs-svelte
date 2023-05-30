---
title: Ployline
category: Vector Layers
order: 11
---

<script>
  import PolylineUsage from '/src/common/sample/polyline/PolylineUsage.svelte';
</script>

# Polyline

A class for drawing polyline overlays on a map.

### Polyline Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `latLngs` | [`LatLng[]`](https://leafletjs.com/reference.html#latlng) | `undefined` | An array of geographical points (latitude and longitude). | `true` | 
| `options` | [`PolylineOptions`](https://leafletjs.com/reference.html#polyline-option) | `undefined` | Describes the property of the Polyline. | `true` |
| `polyline` | [`Polyline`](https://leafletjs.com/reference.html#polyline) | `undefined` | The underlying Leaflet Polyline object instance. | `false` |

</div>

## Example

<div class='example'>
  <PolylineUsage />

  ```svelte
  <script>
    // ...
    const polylineLatLngs = [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2]
    ];
  </script>

  <Leaflet options={mapOption} bind:map={map}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <Polyline options={{ color: 'green' }} latLngs={polylineLatLngs} />
  </Leaflet>

  ```

</div>