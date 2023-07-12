<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { Map, LatLngBounds, VideoOverlay, VideoOverlayOptions } from 'leaflet';

	export let video: string | string[] | HTMLVideoElement;
	export let bounds: LatLngBounds | number[][];
	export let options: VideoOverlayOptions | undefined = undefined;
	export let videoOverlay: VideoOverlay | undefined = undefined;

	const getMap: () => Map = getContext($L);

	$: {
		if (!videoOverlay) {
			videoOverlay = $L.videoOverlay(video, bounds as LatLngBounds, options).addTo(getMap());
		}
	}

	onDestroy(() => {
		if (videoOverlay) {
			videoOverlay.removeFrom(getMap());
		}
	});
</script>
