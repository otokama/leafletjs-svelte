<script lang='ts'>
  import { getContext, onDestroy } from "svelte";
  import type { Marker, Tooltip, TooltipOptions } from 'leaflet';
  import L from 'leaflet';

  export let options: TooltipOptions = {};
  export let tooltip: Tooltip | undefined = undefined;
  
  let getMarker: () => Marker = getContext(L.Marker);
  let tooltipHtml: HTMLElement;

  $: if (!tooltip && tooltipHtml) {
    if (tooltipHtml.innerHTML) {
      tooltip = L.tooltip(options).setContent(tooltipHtml.innerHTML);
    } else {
      tooltip = L.tooltip(options);
    }
    getMarker().bindTooltip(tooltip);
  }

  onDestroy(() => {
    if (tooltip) {
      getMarker().unbindTooltip();
      tooltip.remove();
    }
  });

</script>

<div bind:this={tooltipHtml} hidden>
  <slot/>
</div>