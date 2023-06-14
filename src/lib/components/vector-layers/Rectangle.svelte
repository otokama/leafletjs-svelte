<script lang='ts'>
  import { getContext, onDestroy, setContext } from 'svelte';
	import type { Map, Rectangle, PolylineOptions, LatLngBounds, LayerGroup, FeatureGroup } from 'leaflet';
	import { leaflet as L } from '$lib/stores/leaflet.js';

  export let latLngBounds: LatLngBounds | number[][];
	export let options: PolylineOptions = {};
  export let rectangle: Rectangle | undefined = undefined;

  const getMap: () => Map = getContext($L);
  const getLayerGroup: () => LayerGroup = getContext($L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext($L.FeatureGroup);
  setContext($L.Layer, () => rectangle);

  $: if (!rectangle) {
    rectangle = $L.rectangle(latLngBounds as LatLngBounds, options);
    if (getLayerGroup) {
      rectangle.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      rectangle.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup) {
      rectangle.addTo(getMap());
    }
  }

  onDestroy(() => {
    if (rectangle) {
      if (getLayerGroup && getLayerGroup().hasLayer(rectangle)) {
        getLayerGroup().removeLayer(rectangle);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(rectangle)) {
        getFeatureGroup().removeLayer(rectangle);
      }
      if (!getLayerGroup && !getFeatureGroup){
        rectangle.removeFrom(getMap());
      }
    }
  });

</script>

{#if rectangle}
  <slot/>
{/if}