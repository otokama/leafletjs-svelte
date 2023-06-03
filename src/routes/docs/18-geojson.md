---
title: GeoJSON
category: Other Layers
order: 18
---

<script>
  import GeoJSONUsage from '/src/common/sample/geojson/GeoJSONUsage.svelte';
</script>

# GeoJSON

Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse GeoJSON data and display it on the map.

### GeoJSON Properties

<div class='doc-table-container'>

| Props | Type | Default | Description | Required |
| --- | --- | --- | --- | -- |
| `data` | [`GeoJSON format`](https://datatracker.ietf.org/doc/html/rfc7946) | `undefined` | A GeoJSON format object for creating a GeoJSON layer | `false` |
| `options` | [`GeoJSONOptions`](https://leafletjs.com/reference.html#geojson-option) | `undefined` | Describes the property of the FeatureGroup. | `false` |
| `geojson` | [`GeoJSON`](https://leafletjs.com/reference.html#geojson) | `undefined` | The underlying Leaflet GeoJSON object instance. | `false` |

</div>
<br>

## Example

<div class='example'>
  <GeoJSONUsage />

  ```svelte
  <script>
    // ...
    async function getGeoJSON() {
      const res = await fetch('/geojson/example.geojson');
      return await res.json();
    }

    const geojsonOptions: GeoJSONOptions = {
      onEachFeature: function(feature, layer) {
        layer.bindTooltip(feature.properties.label, {
          className: 'example-geojson-tooltip',
          direction: 'center'
        });
      },
      style: function(feature) {
        return {
          color: feature?.properties.color
        };
      }
    };
  </script>

  <div class="map-container">
    <Leaflet options={mapOption}>
      <TileLayer tileURL={mapURL} options={tileLayerOption} />
      {#await getGeoJSON() then geojsonData}
        <GeoJson data={geojsonData} options={geojsonOptions} />
      {/await}
    </Leaflet>
  </div>
  ```

</div>