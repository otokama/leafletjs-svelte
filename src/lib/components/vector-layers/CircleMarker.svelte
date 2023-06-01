<script lang='ts'>
  import { getContext, onDestroy, setContext } from 'svelte';
	import type { Map, CircleMarker, CircleMarkerOptions, LatLng, LayerGroup, FeatureGroup } from 'leaflet';
	import L from 'leaflet';

  export let latLng: LatLng | number[];
	export let options: CircleMarkerOptions = { radius: 10 };
  export let circleMarker: CircleMarker | undefined = undefined;

  const getMap: () => Map = getContext(L);
  const getLayerGroup: () => LayerGroup = getContext(L.LayerGroup);
  const getFeatureGroup: () => FeatureGroup = getContext(L.FeatureGroup);
  setContext(L.Layer, () => circleMarker);

  $: if (!circleMarker) {
    circleMarker = L.circleMarker(latLng as LatLng, options);
    if (getLayerGroup) {
      circleMarker.addTo(getLayerGroup());
    }
    if (getFeatureGroup) {
      circleMarker.addTo(getFeatureGroup());
    }
    if (!getLayerGroup && !getFeatureGroup){
      circleMarker = L.circleMarker(latLng as LatLng, options).addTo(getMap());
    }
  }

  onDestroy(() => {
    if (circleMarker) {
      if (getLayerGroup && getLayerGroup().hasLayer(circleMarker)) {
        getLayerGroup().removeLayer(circleMarker);
      }
      if (getFeatureGroup && getFeatureGroup().hasLayer(circleMarker)) {
        getFeatureGroup().removeLayer(circleMarker);
      }
      if (!getLayerGroup && !getFeatureGroup){
        circleMarker.removeFrom(getMap());
      }
    }
  });

</script>

{#if circleMarker}
  <slot/>
{/if}