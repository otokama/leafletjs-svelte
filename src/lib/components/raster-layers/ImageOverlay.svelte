<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { ImageOverlay, ImageOverlayOptions, LatLngBounds, Map } from 'leaflet';
	import { getContext, onDestroy } from 'svelte';

	export let imageUrl: string;
	export let bounds: LatLngBounds | number[][];
	export let options: ImageOverlayOptions | undefined = undefined;
	export let imageOverlay: ImageOverlay | undefined = undefined;

	const getMap: () => Map = getContext($L);

	$: {
		if (!imageOverlay) {
			imageOverlay = $L.imageOverlay(imageUrl, bounds as LatLngBounds, options).addTo(getMap());
		}
	}

	onDestroy(() => {
		if (imageOverlay) {
			imageOverlay.removeFrom(getMap());
		}
	});
</script>
