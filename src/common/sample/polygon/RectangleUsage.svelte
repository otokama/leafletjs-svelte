<script lang="ts">
  import type { MapOptions, TileLayerOptions } from "leaflet";
  import Leaflet from "$lib/components/Leaflet.svelte";
  import TileLayer from "$lib/components/raster-layers/TileLayer.svelte";
  import Rectangle from "$lib/components/vector-layers/Rectangle.svelte";

  const mapURL =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
  const mapOption: MapOptions = {
    center: [55.34788876205326, -4.394531],
    zoom: 6,
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: "abcd",
  };
</script>

<div class="map-container">
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />

    <Rectangle
      latLngBounds={[
        [54.559322, -5.767822],
        [56.1210604, -3.02124],
      ]}
      options={{ color: "green" }}
    />
  </Leaflet>
</div>
