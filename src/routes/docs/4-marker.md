---
title: Marker
category: UI Layers
order: 4
---
<script>
  import MarkerExample from '/src/common/sample/marker/MarkerExample.svelte';
  import MarkerIconExample from '/src/common/sample/marker/MarkerIcon.svelte';
  import MarkerDivIconExample from '/src/common/sample/marker/MarkerDivIcon.svelte';
</script>

# Marker
Used to display clickable/draggable icons on the map.

## Usage

<div class='example'>

  ```svelte
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <!-- basic marker -->
    <Marker latLng={L.latLng([40.7249822, -74.006205])} />
  </Leaflet>
  ```
  <MarkerExample />
</div>
<br>

### Marker with icon

<div class='example'>

  ```svelte
  <script>
    const markerIconOptions = {
      iconUrl: '/svelte_logo.svg',
      iconSize: [35, 35]
    };
  </script>

  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <!-- marker with icon -->
    <Marker latLng={L.latLng([40.6501, -73.9495800])}>
      <Icon options={markerIconOptions} />
    </Marker>

  </Leaflet>
  ```
  <MarkerIconExample />
</div>

<br>

### Marker with DivIcon

<div class='example'>

  ```svelte
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <!-- marker with DivIcon -->
    <Marker latLng={L.latLng([40.771133, -73.974187])}>
      <DivIcon options={{iconAnchor: [54, 54]}}>
        <div class='div-icon'>
          <img src='/park_icon.png' style="width: 45px;" alt>
          <span>Central Park</span>
        </div>
      </DivIcon>
    </Marker>

  </Leaflet>
  ```

  <MarkerDivIconExample />

</div>
<br>

## Properties

### Marker

<a href='https://leafletjs.com/reference.html#marker' target="_blank">
  MarkerOptions
</a>

### Marker Icon

<a href='https://leafletjs.com/reference.html#icon' target="_blank">
  IconOptions
</a>

### DivIcon

<a href='https://leafletjs.com/reference.html#divicon' target="_blank">
  DivIconOptions
</a>