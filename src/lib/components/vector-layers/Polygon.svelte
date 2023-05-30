<script lang='ts'>
  import { getContext, setContext } from 'svelte';
	import type { Map, Polygon, PolygonOptions, LatLng } from 'leaflet';
	import L from 'leaflet';

  export let latLngs: LatLng[] | number[][];
	export let options: PolygonOptions = {};
  export let polygon: Polygon | undefined = undefined;

  const getMap: () => Map = getContext(L);
  setContext(L.Layer, () => polygon);

  $: if (!polygon) {
    polygon = L.polygon(latLngs as LatLng[], options).addTo(getMap());
  }

</script>

{#if polygon}
  <slot/>
{/if}