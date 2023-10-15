<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { InteractiveLayerOptions, LayerGroup, LayerOptions, Map } from 'leaflet';
	import { afterUpdate, getContext, setContext } from 'svelte';

	export let layerGroup: LayerGroup | undefined = undefined;
	export let options: (InteractiveLayerOptions & LayerOptions) | undefined = undefined;
	export let onLayerGroupReady: ((layerGroup: L.LayerGroup) => void) | undefined = undefined;

	const getMap: () => Map = getContext($L);
	setContext($L.LayerGroup, () => layerGroup);

	$: if (!layerGroup) {
		layerGroup = $L.layerGroup([], options).addTo(getMap());
	}

	afterUpdate(() => {
		if (layerGroup && onLayerGroupReady) onLayerGroupReady(layerGroup);
	});
</script>

{#if layerGroup}
	<slot />
{/if}
