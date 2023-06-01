<script lang='ts'>
  import { setContext, getContext } from "svelte";
  import type { Map, LayerGroup, InteractiveLayerOptions, LayerOptions } from "leaflet";
  import L from 'leaflet';
  
  export let layerGroup: LayerGroup | undefined = undefined;
  export let options: InteractiveLayerOptions & LayerOptions | undefined = undefined;

  const getMap: () => Map = getContext(L);
  setContext(L.LayerGroup, () => layerGroup);
  
  $: if (!layerGroup) {
    layerGroup = L.layerGroup([], options).addTo(getMap());
  }

</script>

{#if layerGroup}
  <slot/>
{/if}