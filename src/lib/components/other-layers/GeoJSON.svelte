<script lang='ts'>
  import { setContext, getContext, onDestroy } from "svelte";
  import type { Map, GeoJSON, GeoJSONOptions, LayerGroup, FeatureGroup } from "leaflet";
  import L from 'leaflet';
  
  export let data: any = undefined;
  export let geojson: GeoJSON | undefined = undefined;
  export let options: GeoJSONOptions | undefined = undefined;

  const getMap: () => Map = getContext(L);
  const getLayerGroup: () => LayerGroup = getContext(L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext(L.FeatureGroup);
  setContext(L.Layer, () => geojson);
  
  $: if (!geojson) {
    geojson = L.geoJSON(data, options);
    if (getLayerGroup) {
      geojson.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      geojson.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup) {
      geojson.addTo(getMap());
    }
  }

  onDestroy(() => {
    if (geojson) {
      if (getLayerGroup && getLayerGroup().hasLayer(geojson)) {
        getLayerGroup().removeLayer(geojson);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(geojson)) {
        getFeatureGroup().removeLayer(geojson);
      }
      if (!getLayerGroup && !getFeatureGroup){
        geojson.removeFrom(getMap());
      }
    }
  });
</script>

{#if geojson}
  <slot/>
{/if}