<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { FeatureGroup, LatLng, LayerGroup, Map, Polygon, PolylineOptions } from 'leaflet';
	import { getContext, onDestroy, setContext } from 'svelte';

	export let latLngs: LatLng[] | number[][];
	export let options: PolylineOptions = {};
	export let polygon: Polygon | undefined = undefined;

	const getMap: () => Map = getContext($L);
	const getLayerGroup: () => LayerGroup = getContext($L.LayerGroup);
	const getFeatureGroup: () => FeatureGroup = getContext($L.FeatureGroup);
	setContext($L.Layer, () => polygon);

	$: if (!polygon) {
		polygon = $L.polygon(latLngs as LatLng[], options);
		if (getLayerGroup) {
			polygon.addTo(getLayerGroup());
		}
		if (getFeatureGroup) {
			polygon.addTo(getFeatureGroup());
		}
		if (!getLayerGroup && !getFeatureGroup) {
			polygon.addTo(getMap());
		}
	}

	onDestroy(() => {
		if (polygon) {
			if (getLayerGroup && getLayerGroup().hasLayer(polygon)) {
				getLayerGroup().removeLayer(polygon);
			}
			if (getFeatureGroup && getFeatureGroup().hasLayer(polygon)) {
				getFeatureGroup().removeLayer(polygon);
			}
			if (!getLayerGroup && !getFeatureGroup) {
				polygon.removeFrom(getMap());
			}
		}
	});
</script>

{#if polygon}
	<slot />
{/if}
