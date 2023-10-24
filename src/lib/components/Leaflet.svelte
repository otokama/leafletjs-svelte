<script lang="ts">
  import type LeafletType from "leaflet";
  import type { LatLngBounds, Map, MapOptions } from "leaflet";
  import { onDestroy, onMount, setContext } from "svelte";
  import markerIcon2xUrl from "../leaflet-img/marker-icon-2x.png";
  import markerIconUrl from "../leaflet-img/marker-icon.png";
  import markerShadowUrl from "../leaflet-img/marker-shadow.png";
  import fixEditCircleClass from "../misc/fix-edit-circle.js";
  import { leaflet } from "../stores/leaflet.js";
  import { hasBaseLayer } from "../stores/map.js";

  export let map: Map | undefined = undefined;
  export let options: MapOptions | undefined = undefined;
  export let bounds: LatLngBounds | undefined = undefined;
  export let height: string = "100%";
  export let width: string = "100%";
  export let Leaflet: typeof LeafletType | undefined = undefined;

  export let enableDraw: boolean = false;
  export let drawOptions:
    | LeafletType.Control.DrawConstructorOptions
    | undefined = undefined;

  export let onMapReady: ((map: L.Map) => void) | undefined = undefined;

  let mapEle: HTMLElement;
  let leafletDraw: any;

  $: if ($leaflet) {
    setContext($leaflet, () => map);
  }

  // fix edit circle radius
  $: if (leafletDraw) {
    fixEditCircleClass();
  }

  onMount(async () => {
    var L = await import("leaflet");
    $leaflet = L;
    Leaflet = L;
    $hasBaseLayer = false;
    if (mapEle) {
      map = L.map(mapEle, options);
      if (bounds && map) {
        map.fitBounds(bounds);
      }

      if (enableDraw) {
        await initDrawTool(map);
      }

      if (onMapReady) {
        onMapReady(map);
      }
      if ((window as any).Cypress) {
        (window as any).leafletmap = map;
      }
    }
  });

  const initDrawTool = async (map: LeafletType.Map) => {
    await import("leaflet-draw/dist/leaflet.draw-src.css");
    leafletDraw = await import("leaflet-draw");
    (window as any).type = Symbol(); // fix rectangle draw tool

    const drawnItems = new $leaflet.FeatureGroup();
    const defaultIcon: LeafletType.Icon = $leaflet.icon({
      iconUrl: markerIconUrl,
      iconRetinaUrl: markerIcon2xUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: markerShadowUrl,
      shadowSize: [41, 41],
      shadowRetinaUrl: markerShadowUrl,
      tooltipAnchor: [16, -28],
    });

    const defaultDrawOptions: LeafletType.Control.DrawConstructorOptions = {
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        marker: {
          icon: defaultIcon,
        },
      },
    };

    // set the default icon if not provided in drawOptions:
    if (
      drawOptions &&
      drawOptions.draw &&
      drawOptions.draw.marker &&
      !drawOptions.draw.marker.icon
    ) {
      drawOptions.draw.marker.icon = defaultIcon;
    }

    const drawControl = new $leaflet.Control.Draw(
      drawOptions ? drawOptions : defaultDrawOptions
    );

    map.addControl(drawControl);
    map.addLayer(drawnItems);

    map.on("draw:created", (e) => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
    });
  };

  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });
</script>

<div style={`height:${height}; width:${width};`} bind:this={mapEle}>
  {#if map}
    <slot />
  {/if}
</div>
