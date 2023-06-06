<script lang="ts">
	import { getContext, setContext, onDestroy } from 'svelte';
	import L from 'leaflet';
	import type { Map, Marker, MarkerOptions, LatLng, LayerGroup, FeatureGroup } from 'leaflet';
	export let latLng: LatLng;
	export let options: MarkerOptions | undefined = undefined;
	export let marker: Marker | undefined = undefined;

	const getMap: () => Map = getContext(L);
  const getLayerGroup: () => LayerGroup = getContext(L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext(L.FeatureGroup);
  setContext(L.Layer, () => marker);

	$: if (!marker) {
    marker = L.marker(latLng, options);
    if (getLayerGroup) {
      marker.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      marker.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup) {
      marker.addTo(getMap());
    }
	}

	onDestroy(() => {
    if (marker) {
      if (getLayerGroup && getLayerGroup().hasLayer(marker)) {
        getLayerGroup().removeLayer(marker);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(marker)) {
        getFeatureGroup().removeLayer(marker);
      }
      if (!getLayerGroup && !getFeatureGroup){
        marker.removeFrom(getMap());
      }
    }
  });
</script>

{#if marker}
  <slot/>
{/if}