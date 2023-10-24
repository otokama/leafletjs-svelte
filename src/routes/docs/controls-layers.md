---
title: Layers Control
category: Controls
order: 1
---

<script>
  import LayerControlExample from '/src/common/sample/layer_control/LayerControlExample.svelte';
</script>

# Layers Control

Allows users to switch between different base layers and switch overlays on/off.

### LayerControl Properties

<div class='doc-table-container'>

| Props      | Type                                                                                   | Default      | Description                                                                                                   | Required |
| ---------- | -------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- | -------- |
| `options`  | [`Control.Layers options`](https://leafletjs.com/reference.html#control-layers-option) | `{}`         | Layer control options                                                                                         | `false`  |
| `position` | `string`                                                                               | `'topright'` | The position of the control. Possible values are `'topleft'`, `'topright'`, `'bottomleft'` or `'bottomright'` | `false`  |

</div>

### Usage

Wrap all base layer and overlay components you would like to add to layer control inside `<LayerControl/>`. Tile Layers can only be added as _base layers_. Other layers will be added as _overlays_, and must be wrapped in `<LayerGroup/>` for each group of layers.
Make sure to provide a layer control name as a key for each layer group or the layer group won't be added to layer control.

## Example

<div class='example'>
  <LayerControlExample />

```svelte
<Leaflet options={mapOption}>
  <LayerControl>
    <TileLayer
      tileURL={mapTilerURL}
      options={mapTilerOptions}
      layerControlName="MapTiler"
    />
    <TileLayer
      tileURL={satelliteImageryURL}
      options={mapTilerOptions}
      layerControlName="Satellite"
    />
    <TileLayer
      tileURL={cartoMapURL}
      options={cartoTileLayerOption}
      layerControlName="CARTO"
    />

    <TileLayerWMS
      tileURL={tileLayerWMSUrl}
      options={tileLayerWMSOptions}
      layerControlName="WMS"
    />

    <VideoOverlay
      video={videoUrl}
      bounds={videoBounds}
      layerControlName="patricia_nasa"
    />

    <LayerGroup layerControlName="State Borders">
      <Polygon latLngs={utahBorderCoor} />
      <Polygon latLngs={wyBorderCoor} />
    </LayerGroup>
  </LayerControl>
</Leaflet>
```

</div>

