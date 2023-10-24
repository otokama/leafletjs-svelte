<script lang="ts">
  import { leaflet as L } from "$lib/stores/leaflet.js";
  import type { Layer, Tooltip, TooltipOptions } from "leaflet";
  import { getContext, onDestroy } from "svelte";

  export let options: TooltipOptions = {};
  export let tooltip: Tooltip | undefined = undefined;

  let getLayer: () => Layer = getContext($L.Layer);
  let tooltipHtml: HTMLElement;

  $: if (!tooltip && tooltipHtml) {
    if (tooltipHtml.innerHTML) {
      tooltip = $L.tooltip(options).setContent(tooltipHtml.innerHTML);
    } else {
      tooltip = $L.tooltip(options);
    }
    getLayer().bindTooltip(tooltip);
  }

  onDestroy(() => {
    if (tooltip) {
      getLayer().unbindTooltip();
      tooltip.remove();
    }
  });
</script>

<div bind:this={tooltipHtml} hidden>
  <slot />
</div>
