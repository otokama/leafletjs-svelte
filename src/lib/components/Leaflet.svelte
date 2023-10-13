<script lang="ts">
	import type { LatLngBounds, Map, MapOptions } from 'leaflet';
	import type L from 'leaflet/index.js';
	import { onDestroy, onMount, setContext } from 'svelte';
	import { leaflet } from '../stores/leaflet.js';
  import "leaflet-draw/dist/leaflet.draw.css";

	export let map: Map | undefined = undefined;
	export let options: MapOptions | undefined;
	export let bounds: LatLngBounds | undefined = undefined;
	export let height: string = '100%';
	export let width: string = '100%';
	export let Leaflet: typeof L | undefined = undefined;
	export let enableDraw: boolean = false;

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

      if (enableDraw) {
        await import("leaflet-draw/dist/leaflet.draw.css");
        await import('leaflet-draw');
        (window as any).type = Symbol();
        const drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
  
        const drawControl = new L.Control.Draw({
          edit: {
            featureGroup: drawnItems
          }
        });
        map.addControl(drawControl);
  
        map.on('draw:created', function (e) {
          const layer = e.layer;
          drawnItems.addLayer(layer);
        });
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
