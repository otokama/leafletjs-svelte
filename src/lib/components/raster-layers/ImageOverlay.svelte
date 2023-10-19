<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { Control, ImageOverlay, ImageOverlayOptions, LatLngBounds, Map } from 'leaflet';
	import { getContext, onDestroy } from 'svelte';

	export let imageUrl: string;
	export let bounds: LatLngBounds | number[][];
	export let options: ImageOverlayOptions | undefined = undefined;
	export let imageOverlay: ImageOverlay | undefined = undefined;
	export let layerControlName: string | undefined = undefined;

	const getLayerControl: (() => Control.Layers) | undefined = getContext($L.Control.Layers);
	const getMap: () => Map = getContext($L);
	const map = getMap();

	imageOverlay = $L.imageOverlay(imageUrl, bounds as LatLngBounds, options);

	if (getLayerControl && layerControlName) {
		const layerControl = getLayerControl();
		layerControl.addBaseLayer(imageOverlay, layerControlName);
	} else {
		imageOverlay.addTo(map);
	}

	onDestroy(() => {
		if (imageOverlay) {
			imageOverlay.removeFrom(getMap());
		}
	});
</script>
