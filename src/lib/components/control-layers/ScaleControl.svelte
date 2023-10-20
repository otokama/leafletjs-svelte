<script lang="ts">
    import {getContext, onDestroy} from 'svelte';
    import type { Map } from "leaflet";
    import { leaflet as L } from '$lib/stores/leaflet.js';

    export let position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'bottomleft';
    export let options = {};

    let scaleControl: L.Control.Scale | undefined = undefined;

    const getMap: () => Map = getContext($L);

    $: {
        if (!scaleControl) {
            scaleControl = $L.control.scale(options).addTo(getMap());
        }
        scaleControl.setPosition(position);
    }

    onDestroy(() => {
		if (scaleControl) {
			scaleControl.remove();
		}
	});
</script>
