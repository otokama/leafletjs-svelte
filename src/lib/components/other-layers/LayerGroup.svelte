<script lang="ts">
  import { leaflet as L } from '$lib/stores/leaflet.js';
  import type { InteractiveLayerOptions, LayerGroup, LayerOptions, Map, Control } from 'leaflet';
  import { afterUpdate, getContext, setContext } from 'svelte';

  export let layerGroup: LayerGroup | undefined = undefined;
  export let options: (InteractiveLayerOptions & LayerOptions) | undefined = undefined;
  export let layerControlName: string | undefined = undefined;
  export let onLayerGroupReady: ((layerGroup: L.LayerGroup) => void) | undefined = undefined;

  const getMap: () => Map = getContext($L);
  const getLayerControl: (() => Control.Layers) | undefined = getContext($L.Control.Layers);
  setContext($L.LayerGroup, () => layerGroup);

  $: if (!layerGroup) {
    layerGroup = $L.layerGroup([], options).addTo(getMap());
  }

  afterUpdate(() => {
    if (layerGroup) {
      if (onLayerGroupReady) onLayerGroupReady(layerGroup);
			// add to layer control if layer control and layer name is provided:
      if (getLayerControl && layerControlName) {
        const layerControl = getLayerControl();
        layerControl.addOverlay(layerGroup, layerControlName);
      }
    }
	});
</script>

{#if layerGroup}
  <slot />
{/if}
