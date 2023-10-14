---
title: CircleMarker
category: Vector Layers
order: 14
---
<script>
  import CircleMarkerUsage from '/src/common/sample/circle/CircleMarkerUsage.svelte';
</script>

# CircleMarker

A circle of a fixed size with radius specified in pixels. 

### CircleMarker Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `latLng` | [`LatLng`](https://leafletjs.com/reference.html#latlng) | `undefined` | An array of geographical points (latitude and longitude). | `true` | 
| `options` | [`CircleMarkerOptions`](https://leafletjs.com/reference.html#circlemarker-option) | `{&nbsp;radius:&nbsp;10&nbsp;}` | Describes the property of the CircleMarker. By default, circle marker has a radius of 10 pixles.| `false` |
| `circleMarker` | [`CircleMarker`](https://leafletjs.com/reference.html#circlemarker) | `undefined` | The underlying Leaflet CircleMarker object instance. | `false` |

</div>
<br>

## Example

<div class='example'>
  <CircleMarkerUsage />

  ```svelte
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <CircleMarker latLng={[47.61322, -122.3465]} options={{ radius: 20 }} />
    <CircleMarker latLng={[47.600164266, -122.288998844]} options={{ color: 'green', radius: 30 }}>
      <Tooltip options={{ content: 'Leschi, Seattle', offset: [35, 0] }} />
    </CircleMarker>
  </Leaflet>
  ```

</div>