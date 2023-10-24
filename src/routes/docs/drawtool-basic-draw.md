---
  title: Basic Draw Tool
  category: Draw Tool
  order: 1
---

<script>
  import BasicDraw from '/src/common/sample/drawtools/BasicDraw.svelte';
</script>

# Basic Draw Tool

Utilizes the [Leaflet Draw](https://github.com/Leaflet/Leaflet.draw) plugin under the hood to enable drawing and editing basic vectors like polyline, polygon, rectangle, circle and marker. Editing is enabled by default.
<br>

## Example

<div class="example">

  <BasicDraw />

```svelte
<script>
  const onMapReady = (map) => {
    map.on("draw:created", (e: any) => {
      const layer = e.layer;
      const layerType = e.layerType;
      layer.bindTooltip(layerType);
    });
  };
</script>

<Leaflet options={mapOption} enableDraw>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />
</Leaflet>
```

</div>
