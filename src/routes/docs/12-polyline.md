---
title: Ployline
category: Vector Layers
order: 11
---

<script>
  import PolylineUsage from '/src/common/sample/polyline/PolylineUsage.svelte';
  import PolylinePopup from '/src/common/sample/polyline/PolylinePopup.svelte'; 
  import PolylineTooltip from '/src/common/sample/polyline/PolylineTooltip.svelte'; 
</script>

# Polyline

A class for drawing polyline overlays on a map.

### Polyline Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `latLngs` | [`LatLng[]`](https://leafletjs.com/reference.html#latlng) | `undefined` | An array of geographical points (latitude and longitude). | `true` | 
| `options` | [`PolylineOptions`](https://leafletjs.com/reference.html#polyline-option) | `undefined` | Describes the property of the Polyline. | `false` |
| `polyline` | [`Polyline`](https://leafletjs.com/reference.html#polyline) | `undefined` | The underlying Leaflet Polyline object instance. | `false` |

</div>
<br>

<section id='polyline-usage-example'>

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

</section>
<br>

## Polyline binding with Popup

<div class='example'>
  <PolylinePopup/>

  ```svelte
  <Leaflet options={mapOption} bind:map={map}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Polyline
      options={{color: 'green'}}
      latLngs={polylineLatLngs}
    >
      <Popup>
        <strong>LA to Portland</strong>
      </Popup>
    </Polyline>
  </Leaflet>
  ```

</div>

<br>

## Polyline binding with Tooltip

<div class='example'>
  <PolylineTooltip/>

  ```svelte
  <Leaflet options={mapOption} bind:map={map}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    
    <Polyline
      options={{color: 'green'}}
      latLngs={polylineLatLngs}
    >
      <Tooltip options={{direction: 'left'}}>
        <strong>LA to Portland</strong>
      </Tooltip>
    </Polyline>
  </Leaflet>
  ```

</div>