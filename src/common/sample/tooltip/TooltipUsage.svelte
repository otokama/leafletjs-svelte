<script lang="ts">
  import Leaflet from "$lib/components/Leaflet.svelte";
  import TileLayer from "$lib/components/raster-layers/TileLayer.svelte";
  import Marker from "$lib/components/ui-layers/Marker.svelte";
  import Tooltip from "$lib/components/ui-layers/Tooltip.svelte";
  import type { MapOptions, TileLayerOptions } from "leaflet";

  const mapURL =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
  const mapOption: MapOptions = {
    center: [37.229572, -80.41394],
    zoom: 10,
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: "abcd",
  };
</script>

<div class="map-container">
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Marker latLng={[37.229572, -80.41394]}>
      <Tooltip
        options={{
          direction: "top",
          content: "Blacksburg, VA",
          offset: [-15, -20],
        }}
      />
    </Marker>

    <Marker latLng={[37.12985, -80.40894]}>
      <Tooltip options={{ direction: "left", offset: [-30, 0] }}>
        <span>Christiansburg, VA</span>
      </Tooltip>
    </Marker>
  </Leaflet>
</div>
