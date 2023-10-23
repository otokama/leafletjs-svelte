<script lang="ts">
  import { leaflet as L } from '$lib/stores/leaflet.js';
  import type { FeatureGroup, InteractiveLayerOptions, LayerOptions, Map } from 'leaflet';
  import { getContext, setContext } from 'svelte';

  export let featureGroup: FeatureGroup | undefined = undefined;
  export let options: (InteractiveLayerOptions & LayerOptions) | undefined = undefined;

  const getMap: () => Map = getContext($L);
  setContext($L.FeatureGroup, () => featureGroup);

  $: if (!featureGroup) {
    featureGroup = $L.featureGroup([], options).addTo(getMap());
  }
</script>

{#if featureGroup}
  <slot />
{/if}
