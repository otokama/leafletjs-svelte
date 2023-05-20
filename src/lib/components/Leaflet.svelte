<script lang='ts'>
  import { createEventDispatcher, setContext } from 'svelte';
  import L from 'leaflet';
  import type {
    Map,
    MapOptions,
    LatLngBounds
  } from 'leaflet';

  export let options: MapOptions;
  export let bounds: LatLngBounds | undefined = undefined;
  let map: Map;

  setContext(L, () => map);

  function initLeaflet(node: any) {
    map = L.map(node, options);
    if (bounds) {
      map.fitBounds(bounds);
    };
    return {
      destroy: () => {
        map.remove();
      }
    };
  }

</script>

<div style="height:100%; width:100%;" use:initLeaflet>
  {#if map}
    <slot/>
  {/if}
</div>