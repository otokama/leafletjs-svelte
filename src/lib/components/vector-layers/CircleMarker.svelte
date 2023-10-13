<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type {
		CircleMarker,
		CircleMarkerOptions,
		FeatureGroup,
		LatLng,
		LayerGroup,
		Map
	} from 'leaflet';
	import { getContext, onDestroy, setContext } from 'svelte';

	export let latLng: LatLng | number[];
	export let options: CircleMarkerOptions = { radius: 10 };
	export let circleMarker: CircleMarker | undefined = undefined;

	const getMap: () => Map = getContext($L);
	const getLayerGroup: () => LayerGroup = getContext($L.LayerGroup);
	const getFeatureGroup: () => FeatureGroup = getContext($L.FeatureGroup);
	setContext($L.Layer, () => circleMarker);

	$: if (!circleMarker) {
		circleMarker = $L.circleMarker(latLng as LatLng, options);
		if (getLayerGroup) {
			circleMarker.addTo(getLayerGroup());
		}
		if (getFeatureGroup) {
			circleMarker.addTo(getFeatureGroup());
		}
		if (!getLayerGroup && !getFeatureGroup) {
			circleMarker = $L.circleMarker(latLng as LatLng, options).addTo(getMap());
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
			if (!getLayerGroup && !getFeatureGroup) {
				circleMarker.removeFrom(getMap());
			}
		}
	});
</script>

{#if circleMarker}
	<slot />
{/if}
