<script lang="ts">
	import { getContext, setContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, Marker, MarkerOptions, LatLng } from 'leaflet';
	export let latLng: LatLng;
	export let options: MarkerOptions | undefined = undefined;

	const getMap: () => Map = getContext(L);
	export let marker: Marker | undefined = undefined;

  setContext(L.Layer, () => marker);
  
  L.Icon.Default.prototype.options.iconUrl = '/marker-icon.png';
  L.Icon.Default.prototype.options.shadowUrl = '/marker-shadow.png';
  L.Icon.Default.prototype.options.iconRetinaUrl = '/marker-icon-2x.png';

	$: if (!marker) {
    // update the default marker icon and shadow url
    marker = L.marker(latLng, options).addTo(getMap());
	}

	onDestroy(() => {
    if (marker) {
      marker.removeFrom(getMap());
    }
	});
</script>

{#if marker}
  <slot/>
{/if}