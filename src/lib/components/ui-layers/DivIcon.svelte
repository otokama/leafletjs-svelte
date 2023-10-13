<script lang="ts">
	import { leaflet as L } from '$lib/stores/leaflet.js';
	import type { DivIcon, DivIconOptions, Marker } from 'leaflet';
	import { getContext } from 'svelte';

	export let options: DivIconOptions = {};
	let divIcon: DivIcon;
	let getMarker: () => Marker = getContext($L.Layer);

	let divIconHtml: HTMLElement;

	$: if (!divIcon && divIconHtml) {
		if (divIconHtml.innerHTML) {
			divIcon = $L.divIcon({
				html: divIconHtml.innerHTML,
				className: 'div-icon-marker',
				...options
			});
		}

		getMarker().setIcon(divIcon);
	}
</script>

<div bind:this={divIconHtml} hidden>
	<slot />
</div>
