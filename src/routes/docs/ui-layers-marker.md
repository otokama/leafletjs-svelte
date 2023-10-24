---
title: Marker
category: UI Layers
order: 1
---

<script>
  import MarkerExample from '/src/common/sample/marker/MarkerExample.svelte';
  import MarkerIconExample from '/src/common/sample/marker/MarkerIcon.svelte';
  import MarkerDivIconExample from '/src/common/sample/marker/MarkerDivIcon.svelte';
</script>

# Marker

Used to display clickable/draggable icons on the map.

### Marker Properties

<div class='doc-table-container'>

| Props     | Type                                                             | Default     | Description                                   | Required |
| --------- | ---------------------------------------------------------------- | ----------- | --------------------------------------------- | -------- |
| `latLng`  | [`LatLng`](https://leafletjs.com/reference.html#latlng)          | `undefined` | Coordinates of the marker                     | `true`   |
| `options` | [`MarkerOptions`](https://leafletjs.com/reference.html#marker)   | `undefined` | Describes the property of the marker          | `false`  |
| `marker`  | [`Marker`](https://leafletjs.com/reference.html#marker-l-marker) | `undefined` | The underlying Leaflet Marker object instance | `false`  |

</div>
<br>

## Basic Marker

<div class='example'>
  <MarkerExample />

```svelte
<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />
  <!-- basic marker -->
  <Marker latLng={L.latLng([40.7249822, -74.006205])} />
</Leaflet>
```

</div>
<br>

## Marker with icon

Displays an icon for a marker.

### Icon Properties

<div class='doc-table-container'>

| Props     | Type                                                       | Default     | Description                    | Required |
| --------- | ---------------------------------------------------------- | ----------- | ------------------------------ | -------- |
| `options` | [`IconOptions`](https://leafletjs.com/reference.html#icon) | `undefined` | Describes property of the icon | `true`   |

</div>

<br><br>

<div class='example'>
  <MarkerIconExample />

```svelte
<script>
  const markerIconOptions = {
    iconUrl: "/svelte_logo.svg",
    iconSize: [35, 35],
  };
</script>

<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />

  <!-- marker with icon -->
  <Marker latLng={L.latLng([40.6501, -73.94958])}>
    <Icon options={markerIconOptions} />
  </Marker>
</Leaflet>
```

</div>

<br>

## Marker with DivIcon

Display a lightweight icon for markers that uses a simple `<div>` element

### DivIcon Properties

<div class='doc-table-container'>

| Props     | Type                                                             | Default     | Description                       | Required |
| --------- | ---------------------------------------------------------------- | ----------- | --------------------------------- | -------- |
| `options` | [`DivIconOptions`](https://leafletjs.com/reference.html#divicon) | `undefined` | Describes property of the DivIcon | `true`   |

</div>

<br><br>

<div class='example'>
  <MarkerDivIconExample />

```svelte
<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />

  <!-- marker with DivIcon -->
  <Marker latLng={L.latLng([40.771133, -73.974187])}>
    <DivIcon options={{ iconAnchor: [54, 54] }}>
      <div class="div-icon">
        <img src="/park_icon.png" style="width: 45px;" alt />
        <span>Central Park</span>
      </div>
    </DivIcon>
  </Marker>
</Leaflet>
```

</div>

