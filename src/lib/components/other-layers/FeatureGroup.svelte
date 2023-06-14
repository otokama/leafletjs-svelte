<script lang='ts'>
  import { setContext, getContext } from "svelte";
  import type { Map, FeatureGroup, InteractiveLayerOptions, LayerOptions } from "leaflet";
  import { leaflet as L } from '$lib/stores/leaflet.js';
  
  export let featureGroup: FeatureGroup | undefined = undefined;
  export let options: InteractiveLayerOptions & LayerOptions | undefined = undefined;

  const getMap: () => Map = getContext($L);
  setContext($L.FeatureGroup, () => featureGroup);
  
  $: if (!featureGroup) {
    featureGroup = $L.featureGroup([], options).addTo(getMap());
  }

</script>

{#if featureGroup}
  <slot/>
{/if}