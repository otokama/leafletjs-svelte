<script lang='ts'>
  import { getContext } from 'svelte';
	import type { Map, Polyline, PolylineOptions, LatLng } from 'leaflet';
	import L from 'leaflet';

  export let latLngs: LatLng[] | number[][];
	export let options: PolylineOptions = {};
  export let polyline: Polyline | undefined = undefined;

  const getMap: () => Map = getContext(L);

  $: if (!polyline) {
    polyline = L.polyline(latLngs as LatLng[], options).addTo(getMap());
  }

</script>