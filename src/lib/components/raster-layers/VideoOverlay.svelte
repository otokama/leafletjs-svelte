<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { LatLngBounds, Map, VideoOverlay, VideoOverlayOptions } from 'leaflet';
	import { getContext, onDestroy } from 'svelte';

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
