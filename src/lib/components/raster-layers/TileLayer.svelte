<script lang="ts">
  import type { Control, Map, TileLayer, TileLayerOptions } from "leaflet";
  import { getContext, onDestroy } from "svelte";
  import { hasBaseLayer } from "../../stores/map.js";
  import { leaflet as L } from "../../stores/leaflet.js";

  export let tileLayer: TileLayer | undefined = undefined;
  export let tileURL: string;
  export let options: TileLayerOptions | undefined = undefined;
  export let layerControlName: string | undefined = undefined;

  const getLayerControl: (() => Control.Layers) | undefined = getContext(
    $L.Control.Layers
  );
  const getMap: () => Map = getContext($L);
  const map = getMap();

  tileLayer = $L.tileLayer(tileURL, options);

  if (getLayerControl && layerControlName) {
    const layerControl = getLayerControl();
    layerControl.addBaseLayer(tileLayer, layerControlName);
    if (!$hasBaseLayer) {
      tileLayer.addTo(map);
      $hasBaseLayer = true;
    }
  } else {
    tileLayer.addTo(map);
  }

  onDestroy(() => {
    if (tileLayer) {
      tileLayer.removeFrom(getMap());
    }
  });
</script>
