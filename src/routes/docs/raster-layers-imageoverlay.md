---
title: ImageOverlay
category: Raster Layers
order: 3
---

<script>
  import ImageOverlayExample from '/src/common/sample/image_overlay/RasterImageOverlay.svelte';
</script>

# ImageOverlay

Used to load and display a single image over specific bounds of the map.

### ImageOverlay Properties

<div class='doc-table-container'>

| Props              | Type                                                                              | Default     | Description                                          | Required |
| ------------------ | --------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------- | -------- |
| `imageUrl`         | `string`                                                                          | `undefined` | URL of an image.                                     | `true`   |
| `bounds`           | `LatLngBounds`                                                                    | `undefined` | Geographical bounds of the image overlay.            | `true`   |
| `options`          | [`ImageOverlayOptions`](https://leafletjs.com/reference.html#imageoverlay-option) | `undefined` | Describes the property of the ImageOverlay.          | `false`  |
| `imageOverlay`     | [`ImageOverlay`](https://leafletjs.com/reference.html#imageoverlay)               | `undefined` | The underlying Leaflet ImageOverlay object instance. | `false`  |
| `layerControlName` | `string`                                                                          | `undefined` | Layer control key.                                   | `false`  |

</div>

<br>

## Example

<div class='example'>
  <ImageOverlayExample />

```svelte
<script>
  // ...
  const imageUrl =
    "https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg";
  const imageBounds = L.latLngBounds([
    [40.712216, -74.22655],
    [40.773941, -74.12544],
  ]);
  const imageOverlayOptions = { opacity: 0.7 };
</script>

<div class="map-container">
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <ImageOverlay
      {imageUrl}
      bounds={imageBounds}
      options={imageOverlayOptions}
    />
  </Leaflet>
</div>
```

</div>

