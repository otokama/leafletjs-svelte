<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Map, TileLayer, TileLayerOptions } from 'leaflet';
  import { leaflet as L } from '../../stores/leaflet.js';

	export let tileURL: string;
	export let options: TileLayerOptions | undefined = undefined;
	export let tileLayer: TileLayer | undefined = undefined;
  
	const getMap: () => Map = getContext($L);

	$: {
		if (!tileLayer) {
			tileLayer = $L.tileLayer(tileURL, options).addTo(getMap());
		}
	}

	onDestroy(() => {
    if (tileLayer) {
      tileLayer.removeFrom(getMap())
    }
  });
</script>
