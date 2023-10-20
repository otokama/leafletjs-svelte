---
title: ScaleControl
category: Controls
order: 19
---

<script>
  import ScaleControlUsage from '/src/common/sample/controls/ScaleControlUsage.svelte';
</script>

# ScaleControl

A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.

### ScaleControl Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `position` | [`String`](https://leafletjs.com/reference.html#control) | `bottomleft` | The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright' | `false` |
| `options` | [`ScaleControl options`](https://leafletjs.com/reference.html#control-scale-option) | `undefined` | Describes the property of the ScoleControl. | `false` |

</div>
<br>

## Example

<div class='example'>
  <ScaleControlUsage />

  ```svelte
    <script>
        import { Leaflet, TileLayer, ScaleControl } from 'leafletjs-svelte';

        let map;
        
        const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

        const mapOption = {
            center: [39.73, -104.99],
            zoom: 10
        };

        const tileLayerOption = {
            attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
            target="_blank">OpenStreetMap</a>
            &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
            maxNativeZoom: 21,
            maxZoom: 20,
            subdomains: 'abcd'
        };

        const scaleOptions = {
            maxWidth: 200,
            imperial: false
        };
    </script>

    <div class="map-container">
        <Leaflet bind:map options={mapOption}>
            <TileLayer tileURL={mapURL} options={tileLayerOption} />
            <ScaleControl position="bottomleft" options={scaleOptions} />
        </Leaflet>
    </div>
  ```

</div>