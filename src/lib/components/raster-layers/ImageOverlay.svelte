<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, LatLngBounds,ImageOverlay, ImageOverlayOptions } from 'leaflet';

	export let imageUrl: string;
  export let bounds: LatLngBounds;
	export let options: ImageOverlayOptions | undefined = undefined;
	export let imageOverlay: ImageOverlay | undefined = undefined;
  
	const getMap: () => Map = getContext(L);

	$: {
		if (!imageOverlay) {
			imageOverlay = L.imageOverlay(imageUrl, bounds, options).addTo(getMap());
		}
	}

	onDestroy(() => {
    if (imageOverlay) {
      imageOverlay.removeFrom(getMap())
    }
  });
</script>
