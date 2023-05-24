<script lang='ts'>
  import { getContext, onDestroy } from "svelte";
  import type { Marker, Icon, IconOptions } from 'leaflet';
  import L from 'leaflet';

  export let options: IconOptions;
  let icon: Icon;

  let getMarker: () => Marker = getContext(L.Marker);
  
  $: if (!icon) {
    icon = L.icon(options);
    getMarker().setIcon(icon);
  }

</script>