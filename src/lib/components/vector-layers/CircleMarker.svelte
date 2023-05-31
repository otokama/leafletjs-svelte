<script lang='ts'>
  import { getContext, setContext } from 'svelte';
	import type { Map, CircleMarker, CircleMarkerOptions, LatLng } from 'leaflet';
	import L from 'leaflet';

  export let latLng: LatLng | number[];
	export let options: CircleMarkerOptions = { radius: 10 };
  export let circleMarker: CircleMarker | undefined = undefined;

  const getMap: () => Map = getContext(L);
  setContext(L.Layer, () => circleMarker);

  $: if (!circleMarker) {
    circleMarker = L.circleMarker(latLng as LatLng, options).addTo(getMap());
  }

</script>

{#if circleMarker}
  <slot/>
{/if}