---
title: FeatureGroup
category: Other Layers
order: 1
---

<script>
  import FeatureGroupUsage from '/src/common/sample/featuregroup/FeatureGroupUsage.svelte';
</script>

# FeatureGroup

Extended LayerGroup that makes it easier to do the same thing to all its member layers.

### FeatureGroup Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `options` | [`InteractiveLayerOptions and LayerOptions`](https://leafletjs.com/reference.html#featuregroup) | `undefined` | Describes the property of the FeatureGroup. | `false` |
| `featureGroup` | [`LayerGroup`](https://leafletjs.com/reference.html#layergroup-l-layergroup) | `undefined` | The underlying Leaflet FeatureGroup object instance. | `false` |

</div>
<br>

## Example

<div class='example'>
  <FeatureGroupUsage />

  ```svelte
  <script>
    // ...
    let featureGroup: L.FeatureGroup;
    $: if (featureGroup) {
      featureGroup.bindTooltip(L.tooltip({ content: 'State Border' }));
    }
  </script>

  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <FeatureGroup bind:featureGroup>
      <Polygon latLngs={coloradoBorderCoor} />
      <Polygon latLngs={utahBorderCoor} options={{ color: 'green' }} />
      <Polygon latLngs={wyBorderCoor} options={{ color: 'red' }} />
    </FeatureGroup>
  </Leaflet>
  ```

</div>