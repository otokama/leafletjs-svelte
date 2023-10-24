<script lang="ts">
  import { leaflet as L } from '$lib/stores/leaflet.js';
  import type { Circle, CircleOptions, FeatureGroup, LatLng, LayerGroup, Map } from 'leaflet';
  import { getContext, onDestroy, setContext } from 'svelte';

  export let latLng: LatLng | number[];
  export let options: CircleOptions = { radius: 200 };
  export let circle: Circle | undefined = undefined;

  const getMap: () => Map = getContext($L);
  const getLayerGroup: () => LayerGroup = getContext($L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext($L.FeatureGroup);
  setContext($L.Layer, () => circle);

  $: if (!circle) {
    circle = $L.circle(latLng as LatLng, options);
    if (getLayerGroup) {
      circle.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      circle.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup) {
      circle.addTo(getMap());
    }
  }

  onDestroy(() => {
    if (circle) {
      if (getLayerGroup && getLayerGroup().hasLayer(circle)) {
        getLayerGroup().removeLayer(circle);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(circle)) {
        getFeatureGroup().removeLayer(circle);
      }
      if (!getLayerGroup && !getFeatureGroup) {
        circle.removeFrom(getMap());
      }
    }
  });
</script>

{#if circle}
  <slot />
{/if}
