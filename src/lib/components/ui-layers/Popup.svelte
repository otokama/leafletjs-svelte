<script lang='ts'>
  import { getContext, onDestroy } from "svelte";
  import type { Marker, Popup, PopupOptions } from 'leaflet';
  import L from 'leaflet';

  export let options: PopupOptions = {};

  let popup: Popup;
  let getMarker: () => Marker = getContext(L.Marker);
  let popupHtml: HTMLElement;

  $: if (!popup && popupHtml) {
    if (popupHtml.innerHTML) {
      popup = L.popup(options).setContent(popupHtml.innerHTML);
    } else {
      popup = L.popup(options);
    }
    getMarker().bindPopup(popup);
  } 

  onDestroy(() => {
    if (popup) {
      getMarker().unbindPopup();
      popup.remove();
    }
  });

</script>

<div bind:this={popupHtml} hidden>
  <slot/>
</div>