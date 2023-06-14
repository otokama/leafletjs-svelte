<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
  import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { Map, TileLayer, WMSOptions } from 'leaflet';

	export let tileURL: string;
	export let options: WMSOptions | undefined = undefined;
	export let tileLayer: TileLayer.WMS | undefined = undefined;
  
	const getMap: () => Map = getContext($L);

	$: {
		if (!tileLayer) {
			tileLayer = $L.tileLayer.wms(tileURL, options).addTo(getMap());
		}
	}

	onDestroy(() => {
    if (tileLayer) {
      tileLayer.removeFrom(getMap())
    }
  });
</script>
