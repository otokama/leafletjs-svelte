<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { Control, LatLngBounds, Map, VideoOverlay, VideoOverlayOptions } from 'leaflet';
	import { getContext, onDestroy } from 'svelte';

	export let video: string | string[] | HTMLVideoElement;
	export let bounds: LatLngBounds | number[][];
	export let options: VideoOverlayOptions | undefined = undefined;
	export let videoOverlay: VideoOverlay | undefined = undefined;
	export let layerControlName: string | undefined = undefined;

	const getLayerControl: (() => Control.Layers) | undefined = getContext($L.Control.Layers);
	const getMap: () => Map = getContext($L);
	const map = getMap();

	videoOverlay = $L.videoOverlay(video, bounds as LatLngBounds, options).addTo(getMap());

	if (getLayerControl && layerControlName) {
		const layerControl = getLayerControl();
		layerControl.addOverlay(videoOverlay, layerControlName);
	} else {
		videoOverlay.addTo(map);
	}

	onDestroy(() => {
		if (videoOverlay) {
			videoOverlay.removeFrom(getMap());
		}
	});
</script>
