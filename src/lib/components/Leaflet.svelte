<script lang="ts">
	import type { LatLngBounds, Map, MapOptions } from 'leaflet';
	import type L from 'leaflet/index.js';
	import { onDestroy, onMount, setContext } from 'svelte';
	import { leaflet } from '../stores/leaflet.js';

	export let map: Map | undefined = undefined;
	export let options: MapOptions | undefined = undefined;
	export let bounds: LatLngBounds | undefined = undefined;
	export let height: string = '100%';
	export let width: string = '100%';
	export let Leaflet: typeof L | undefined = undefined;

	let mapEle: HTMLElement;

	$: if ($leaflet) {
		setContext($leaflet, () => map);
	}

	onMount(async () => {
		const L = (await import('leaflet')).default;
		$leaflet = L;
		Leaflet = L;
		if (mapEle) {
			map = L.map(mapEle, options);
			if (bounds && map) {
				map.fitBounds(bounds);
			}
			if (window.Cypress) {
				window.leafletmap = map;
			}
		}
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
</script>

<div style={`height:${height}; width:${width};`} bind:this={mapEle}>
	{#if map}
		<slot />
	{/if}
</div>
