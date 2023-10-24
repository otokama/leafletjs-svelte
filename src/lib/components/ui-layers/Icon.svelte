<script lang="ts">
  import { leaflet as L } from '$lib/stores/leaflet.js';
  import type { Icon, IconOptions, Marker } from 'leaflet';
  import { getContext } from 'svelte';

  export let options: IconOptions;
  let icon: Icon;

  let getMarker: () => Marker = getContext($L.Layer);

  $: if (!icon) {
    icon = $L.icon(options);
    getMarker().setIcon(icon);
  }
</script>
