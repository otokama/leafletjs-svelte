<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, TileLayer, TileLayerOptions } from 'leaflet';

	export let tileURL: string;
	export let options: TileLayerOptions | undefined = undefined;
	const getMap: () => Map = getContext(L);
	let tileLayer: TileLayer;

	$: {
		if (!tileLayer) {
			tileLayer = L.tileLayer(tileURL, options).addTo(getMap());
		}
	}

	onDestroy(() => tileLayer.removeFrom(getMap()));
</script>
