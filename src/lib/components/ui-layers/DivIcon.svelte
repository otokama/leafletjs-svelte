<script lang="ts">
	import { getContext } from 'svelte';
	import type { Marker, DivIcon, DivIconOptions } from 'leaflet';
	import L from 'leaflet';

	export let options: DivIconOptions = {};
	let divIcon: DivIcon;
	let getMarker: () => Marker = getContext(L.Layer);

	let divIconHtml: HTMLElement;

	$: if (!divIcon && divIconHtml) {
    if (divIconHtml.innerHTML) {
      divIcon = L.divIcon({
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
