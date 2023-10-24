<script lang="ts">
  import { leaflet as L } from "$lib/stores/leaflet.js";
  import type {
    FeatureGroup,
    LatLng,
    LayerGroup,
    Map,
    Polyline,
    PolylineOptions,
  } from "leaflet";
  import { getContext, onDestroy, setContext } from "svelte";

  export let latLngs: LatLng[] | number[][];
  export let options: PolylineOptions = {};
  export let polyline: Polyline | undefined = undefined;

  const getMap: () => Map = getContext($L);
  const getLayerGroup: () => LayerGroup = getContext($L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext($L.FeatureGroup);
  setContext($L.Layer, () => polyline);

  $: if (!polyline) {
    polyline = $L.polyline(latLngs as LatLng[], options);

    if (getLayerGroup) {
      polyline.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      polyline.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup) {
      polyline.addTo(getMap());
    }
  }

  onDestroy(() => {
    if (polyline) {
      if (getLayerGroup && getLayerGroup().hasLayer(polyline)) {
        getLayerGroup().removeLayer(polyline);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(polyline)) {
        getFeatureGroup().removeLayer(polyline);
      }
      if (!getLayerGroup && !getFeatureGroup) {
        polyline.removeFrom(getMap());
      }
    }
  });
</script>

{#if polyline}
  <slot />
{/if}
