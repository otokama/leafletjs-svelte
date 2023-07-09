# Leafletjs-svelte 

Svelte component for [LeafletJS](https://leafletjs.com/).
- Written in TypeScript.
- Supports skipping initializing Leaflet in SSR environments but instead only hydrate maps on the client-side.
- Vector drawing support (coming soon...)

## Installation
  Node 16 or higher is required.
  ```bash
  $ npm install leaflet leafletjs-svelte
  ```
Import stylesheet for Leaflet in your app entry point:
  ```js
  import 'leaflet/dist/leaflet.css';
  ```
Component Import:
  ```js
  <script>
    import { Leaflet } from 'leafletjs-svelte';
  </script>
  ```

## Components:
 
**UI layers:**
- [x] Marker
- [x] Popup
- [x] Tooltip

**Raster layers:**
- [x] TileLayer
- [x] TileLayer.WMS
- [x] ImageOverlay
- [x] VideoOverlay

**Vector layers:**
- [x] Polyline
- [x] Polygon
- [x] Circle
- [x] CircleMarker
- [x] Rectangle

**Other layers:**
- [x] LayerGroup
- [x] FeatureGroup
- [x] GeoJSON

## Supported Plugins:

### Vector Drawing (In progress...):

- [ ] Circle
- [ ] CircleMarker
- [ ] Line
- [ ] Marker
- [ ] Polyline
- [ ] Polygon
- [ ] Rectangle
- [ ] Multi-Rectangle