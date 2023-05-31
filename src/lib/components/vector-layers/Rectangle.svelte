<script lang='ts'>
  import { getContext, setContext } from 'svelte';
	import type { Map, Rectangle, PolylineOptions, LatLngBounds } from 'leaflet';
	import L from 'leaflet';

  export let latLngBounds: LatLngBounds | number[][];
	export let options: PolylineOptions = {};
  export let rectangle: Rectangle | undefined = undefined;

  const getMap: () => Map = getContext(L);
  setContext(L.Layer, () => rectangle);

  $: if (!rectangle) {
    rectangle = L.rectangle(latLngBounds as LatLngBounds, options).addTo(getMap());
  }

</script>

{#if rectangle}
  <slot/>
{/if}