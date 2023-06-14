<script lang='ts'>
  import { getContext } from "svelte";
  import type { Marker, Icon, IconOptions } from 'leaflet';
  import { leaflet as L} from "$lib/stores/leaflet.js";

  export let options: IconOptions;
  let icon: Icon;

  let getMarker: () => Marker = getContext($L.Layer);
  
  $: if (!icon) {
    icon = $L.icon(options);
    getMarker().setIcon(icon);
  }

</script>