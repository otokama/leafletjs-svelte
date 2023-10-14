<script lang="ts">
	import type { LatLngBounds, Map, MapOptions } from 'leaflet';

	import type LeafletType from 'leaflet';
	import { onDestroy, onMount, setContext } from 'svelte';
	import fixEditCircleClass from '../../misc/fix-edit-circle.js';
	import { leaflet } from '../stores/leaflet.js';
	export let map: Map | undefined = undefined;
	export let options: MapOptions | undefined = undefined;
	export let bounds: LatLngBounds | undefined = undefined;
	export let height: string = '100%';
	export let width: string = '100%';
	export let Leaflet: typeof LeafletType | undefined = undefined;
	export let enableDraw: boolean = false;
	export let onMapReady: ((map: L.Map) => void) | undefined = undefined;

	let mapEle: HTMLElement;
	let leafletDraw: any;

	$: if ($leaflet) {
		setContext($leaflet, () => map);
	}

	$: if (leafletDraw) {
		fixEditCircleClass();
	}

	onMount(async () => {
		var L = await import('leaflet');
		$leaflet = L;
		Leaflet = L;
		if (mapEle) {
			map = L.map(mapEle, options);
			if (bounds && map) {
				map.fitBounds(bounds);
			}

			if (enableDraw) {
				leafletDraw = await import('leaflet-draw');
				await import('leaflet-draw/dist/leaflet.draw-src.css');
				(window as any).type = Symbol();

				const drawnItems = new L.FeatureGroup();
				const drawControl = new L.Control.Draw({
					edit: {
						featureGroup: drawnItems
					}
				});
				map.addLayer(drawnItems);
				map.addControl(drawControl);

				map.on('draw:created', (e) => {
					const layer = e.layer;
					drawnItems.addLayer(layer);
				});
			}

			if (onMapReady) {
				onMapReady(map);
			}
			if ((window as any).Cypress) {
				(window as any).leafletmap = map;
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
