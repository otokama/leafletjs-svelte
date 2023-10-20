---
title: LayerGroup
category: Other Layers
order: 2
---

<script>
  import LayerGroupUsage from '/src/common/sample/layergroup/LayerGroupUsage.svelte';
</script>

# LayerGroup

Used to group several layers and handle them as one.

### LayerGroup Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `options` | [`InteractiveLayerOptions and LayerOptions`](https://leafletjs.com/reference.html#layergroup-l-layergroup) | `undefined` | Describes the property of the LayerGroup. | `false` |
| `layerGroup` | [`LayerGroup`](https://leafletjs.com/reference.html#layergroup-l-layergroup) | `undefined` | The underlying Leaflet LayerGroup object instance. | `false` |
| `layerControlName`| `string` | `undefined` | Layer control key. | `false` |

</div>
<br>

## Example

<div class='example'>
  <LayerGroupUsage/>

  ```svelte
  <script>
    // ...
    let layerGroup: L.LayerGroup;
    let coloradoPolygon: L.Polygon;
    
    $: if (layerGroup) {
      layerGroup.addLayer(coloradoPolygon)
      layerGroup.eachLayer((layer) => {
        layer.bindPopup(L.popup({ content: 'State Border' }))
      });
    }
  </script>

  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <LayerGroup bind:layerGroup>
      <Polygon latLngs={utahBorderCoor} options={{color: 'green'}} />
    </LayerGroup>
    <Polygon latLngs={coloradoBorderCoor} bind:polygon={coloradoPolygon} >
      <Tooltip options={{direction: 'top'}}>Colorado</Tooltip>
    </Polygon>
  </Leaflet>
  ```

</div>