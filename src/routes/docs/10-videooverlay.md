---
title: VideoOverlay
category: Raster Layers
order: 9
---

<script>
  import VideoOverlayUsage from '/src/common/sample/video_overlay/VideoOverlayUsage.svelte';
</script>

# VideoOverlay

### VideoOverlay Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `video` | `string &#124; string[] &#124; HTMLVideoElement` | `undefined` | The URL of the video (or array of URLs, or a video element. ) | `true` |
| `bounds` | [`LatLngBounds`](https://leafletjs.com/reference.html#latlngbounds) | `undefined` | Geographical bounds of the video overlay. | `true` |
| `options` | [`VideoOverlayOptions`](https://leafletjs.com/reference.html#videooverlay-option) | `undefined` | Describes the property of the VideoOverlay. | `false` |
| `videoOverlay` | [`VideoOverlay`](https://leafletjs.com/reference.html#videooverlay) | `undefined` | The underlying Leaflet VideoOverlay object instance. | `false` |

</div>
<br>

## Example

<div class='example'>
  <VideoOverlayUsage />

  ```svelte
  <script>
    //...
    const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm';
    const videoBounds = L.latLngBounds([[ 32, -130 ], [ 13, -100 ]]);
  </script>

  <div class="map-container">
    <Leaflet bind:map options={mapOption}>
      <TileLayer tileURL={mapURL} options={tileLayerOption} />
      <VideoOverlay video={videoUrl} bounds={videoBounds} />
    </Leaflet>
  </div>
  ```

</div>