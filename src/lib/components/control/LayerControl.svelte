<script lang="ts">
  import { leaflet as L } from '$lib/stores/leaflet.js';
  import type { Map, Control } from 'leaflet';
  import { setContext, getContext } from 'svelte';

  export let options: Control.LayersOptions | {} = {};
  export let position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'topright';

  const getMap: () => Map = getContext($L);
  const layerControl = new $L.Control.Layers(undefined, undefined, { ...options, position });
  layerControl.addTo(getMap());
  setContext($L.Control.Layers, () => layerControl);
</script>

<slot />
