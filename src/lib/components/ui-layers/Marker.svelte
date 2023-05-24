<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, Marker, MarkerOptions, LatLng } from 'leaflet';

	export let latLng: LatLng;
	export let options: MarkerOptions | undefined = undefined;

	const getMap: () => Map = getContext(L);
	let marker: Marker;
	$: if (!marker) {
		marker = L.marker(latLng, options).addTo(getMap());
	}

	onDestroy(() => {
		marker.removeFrom(getMap());
	});
</script>
