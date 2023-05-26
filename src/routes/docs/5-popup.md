---
title: Popup
category: UI Layers
order: 5
---

<script>
  import PopupUsage from '/src/common/sample/popup/PopupUsage.svelte';
</script>

# Popup

Used to open popups in certain places of the map.

### Popup Properties

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | --| 
| `options` | [`PopupOptions`](https://leafletjs.com/reference.html#popup) | **`undefined`** | Describes the property of the marker | `false` |
| `popup` | [`Popup`](https://leafletjs.com/reference.html#popup) | **`undefined`** | The underlying Leaflet Popup object instance | `false` |
<br>

## Example

<div class='example'>

  ```svelte
  <Leaflet bind:map options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Marker latLng={L.latLng([40.7249822, -74.006205])}>
      <Popup options={{content: '<p>This is New York</p>'}} />
    </Marker>

    <Marker latLng={L.latLng([40.6501, -73.9495800])} >
      <Popup>
        <p>This is Brooklyn</p>
      </Popup>
    </Marker>

  </Leaflet>
  ```
  <PopupUsage />

</div>