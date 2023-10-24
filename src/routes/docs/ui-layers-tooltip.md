---
title: Tooltip
category: UI Layers
order: 3
---

<script>
  import TooltipUsage from '/src/common/sample/tooltip/TooltipUsage.svelte';
</script>

# Tooltip

Used to display small texts on top of map layers.

### Tooltip Properties

<div class='doc-table-container'>

| Props     | Type                                                             | Default     | Description                                     | Required |
| --------- | ---------------------------------------------------------------- | ----------- | ----------------------------------------------- | -------- |
| `options` | [`TooltipOptions`](https://leafletjs.com/reference.html#tooltip) | `{}`        | Describes the property of the tooltip.          | `false`  |
| `tooltip` | [`Tooltip`](https://leafletjs.com/reference.html#tooltip)        | `undefined` | The underlying Leaflet Tooltip object instance. | `false`  |

</div>

<br>

## Example

<div class='example'>

  <TooltipUsage/>

```svelte
<Leaflet options={mapOption}>
  <TileLayer tileURL={mapURL} options={tileLayerOption} />

  <Marker latLng={L.latLng([37.229572, -80.41394])}>
    <Tooltip
      options={{
        direction: "top",
        content: "Blacksburg, VA",
        offset: [-15, -20],
      }}
    />
  </Marker>

  <Marker latLng={L.latLng([37.12985, -80.40894])}>
    <Tooltip
      options={{
        direction: "left",
        offset: [-30, 0],
      }}
    >
      <span>Christiansburg, VA</span>
    </Tooltip>
  </Marker>
</Leaflet>
```

</div>

