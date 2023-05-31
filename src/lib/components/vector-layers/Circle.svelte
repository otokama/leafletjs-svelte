<script lang='ts'>
  import { getContext, setContext } from 'svelte';
	import type { Map, Circle, CircleOptions, LatLng } from 'leaflet';
	import L from 'leaflet';

  export let latLng: LatLng | number[];
	export let options: CircleOptions = { radius: 200 };
  export let circle: Circle | undefined = undefined;

  const getMap: () => Map = getContext(L);
  setContext(L.Layer, () => circle);

  $: if (!circle) {
    circle = L.circle(latLng as LatLng, options).addTo(getMap());
  }

</script>

{#if circle}
  <slot/>
{/if}