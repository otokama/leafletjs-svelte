<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import { getContext, onDestroy } from 'svelte';
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { Map, Control, TileLayer, WMSOptions } from 'leaflet';

	export let tileURL: string;
	export let options: WMSOptions | undefined = undefined;
	export let tileLayer: TileLayer.WMS | undefined = undefined;
	export let layerControlName: string | undefined = undefined;

	const getLayerControl: (() => Control.Layers) | undefined = getContext($L.Control.Layers);
	const getMap: () => Map = getContext($L);
	const map = getMap();

	tileLayer = $L.tileLayer.wms(tileURL, options).addTo(getMap());

	if (getLayerControl && layerControlName) {
		const layerControl = getLayerControl();
		layerControl.addOverlay(tileLayer, layerControlName);
	} else {
		tileLayer.addTo(map);
	}

	onDestroy(() => {
		if (tileLayer) {
			tileLayer.removeFrom(getMap());
		}
	});
</script>
