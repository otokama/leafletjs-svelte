<script lang="ts">
	import L from 'leaflet';
	import { createEventDispatcher, setContext } from 'svelte';
	import type { Map, MapOptions, LatLngBounds } from 'leaflet';

	export let map: Map | undefined = undefined;
	export let options: MapOptions | undefined = undefined;
	export let bounds: LatLngBounds | undefined = undefined;
	export let height: string = '100%';
	export let width: string = '100%';

	setContext(L, () => map);

	function initLeaflet(node: any) {
		map = L.map(node, options);
		if (bounds) {
			map.fitBounds(bounds);
		}
		return {
			destroy: () => {
				if (map) {
					map.remove();
				}
			}
		};
	}
</script>

<div style={`height:${height}; width:${width};`} use:initLeaflet>
	{#if map}
		<slot />
	{/if}
</div>
