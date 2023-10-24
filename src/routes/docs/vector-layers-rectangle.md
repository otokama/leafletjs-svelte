---
title: Rectangle
category: Vector Layers
order: 5
---

<script>
  import RectangleUsage from '/src/common/sample/polygon/RectangleUsage.svelte';
</script>

# Rectangle

Drawing rectangle overlays on a map

### Rectangle Properties

<div class='doc-table-container'>

| Props          | Type                                                                     | Default     | Description                                                      | Required |
| -------------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------- | -------- |
| `latLngBounds` | [`latLngBounds`](https://leafletjs.com/reference.html#latlngbounds)      | `undefined` | Represents a rectangular geographical area on a map.             | `true`   |
| `options`      | [`PolygonOptions`](https://leafletjs.com/reference.html#polyline-option) | `undefined` | Describes the property of the Rectangle. Extended from Polyline. | `false`  |
| `rectangle`    | [`Rectangle`](https://leafletjs.com/reference.html#rectangle)            | `undefined` | The underlying Leaflet Rectangle object instance.                | `false`  |

</div>
<br>

## Example

<div class='example'>
  <RectangleUsage />

```svelte
<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />

  <Rectangle
    latLngBounds={[
      [54.559322, -5.767822],
      [56.1210604, -3.02124],
    ]}
    options={{ color: "green" }}
  />
</Leaflet>
```

</div>

