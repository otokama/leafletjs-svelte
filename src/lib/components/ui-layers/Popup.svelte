<script lang='ts'>
  import { getContext, onDestroy } from "svelte";
  import type { Layer, Popup, PopupOptions } from 'leaflet';
  import { leaflet as L} from "$lib/stores/leaflet.js";

  export let options: PopupOptions = {};
  export let popup: Popup | undefined = undefined;
  
  let getLayer: () => Layer = getContext($L.Layer);
  let popupHtml: HTMLElement;

  $: if (!popup && popupHtml) {
    if (popupHtml.innerHTML) {
      popup = $L.popup(options).setContent(popupHtml.innerHTML);
    } else {
      popup = $L.popup(options);
    }
    getLayer().bindPopup(popup);
  } 

  onDestroy(() => {
    if (popup) {
      getLayer().unbindPopup();
      popup.remove();
    }
  });

</script>

<div bind:this={popupHtml} hidden>
  <slot/>
</div>