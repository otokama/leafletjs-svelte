<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, LatLngBounds, VideoOverlay, VideoOverlayOptions } from 'leaflet';

	export let video: string | string[] | HTMLVideoElement;
  export let bounds: LatLngBounds;
	export let options: VideoOverlayOptions | undefined = undefined;
	export let videoOverlay: VideoOverlay | undefined = undefined;
  
	const getMap: () => Map = getContext(L);

	$: {
		if (!videoOverlay) {
			videoOverlay = L.videoOverlay(video, bounds, options).addTo(getMap());
		}
	}

	onDestroy(() => {
    if (videoOverlay) {
      videoOverlay.removeFrom(getMap())
    }
  });
</script>
