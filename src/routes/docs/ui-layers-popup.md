---
title: Popup
category: UI Layers
order: 2
---

<script>
  import PopupUsage from '/src/common/sample/popup/PopupUsage.svelte';
</script>

# Popup

Used to open popups in certain places of the map.

### Popup Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | --| 
| `options` | [`PopupOptions`](https://leafletjs.com/reference.html#popup) | `{}` | Describes the property of the popup. | `false` |
| `popup` | [`Popup`](https://leafletjs.com/reference.html#popup) | `undefined` | The underlying Leaflet Popup object instance. | `false` |
</div>

<br>

## Example

<div class='example'>
  <PopupUsage />

  ```svelte
  <Leaflet options={mapOption}>
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

</div>