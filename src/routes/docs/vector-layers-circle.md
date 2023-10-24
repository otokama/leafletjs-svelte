---
title: Circle
category: Vector Layers
order: 3
---

<script>
  import CircleUsage from '/src/common/sample/circle/CircleUsage.svelte';
</script>

# Circle

For drawing circle overlays on a map.

### Circle Properties

<div class='doc-table-container'>

| Props     | Type                                                                  | Default                          | Description                                                                          | Required |
| --------- | --------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------ | -------- |
| `latLng`  | [`LatLng`](https://leafletjs.com/reference.html#latlng)               | `undefined`                      | An array of geographical points (latitude and longitude).                            | `true`   |
| `options` | [`CircleOptions`](https://leafletjs.com/reference.html#circle-option) | `{&nbsp;radius:&nbsp;200&nbsp;}` | Describes the property of the Circle. By default, circle has a radius of 200 meters. | `false`  |
| `circle`  | [`Circle`](https://leafletjs.com/reference.html#circle)               | `undefined`                      | The underlying Leaflet Circle object instance.                                       | `false`  |

</div>
<br>

## Example

<div class='example'>
  <CircleUsage />

```svelte
<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />

  <Circle
    latLng={[47.61322, -122.3465]}
    options={{ radius: 700, color: "red" }}
  />
  <Circle latLng={[47.600164266, -122.288998844]} options={{ radius: 800 }}>
    <Tooltip options={{ content: "Leschi, Seattle" }} />
  </Circle>
</Leaflet>
```

</div>

