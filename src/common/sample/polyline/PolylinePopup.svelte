<script lang="ts">
  import Leaflet from "$lib/components/Leaflet.svelte";
  import TileLayer from "$lib/components/raster-layers/TileLayer.svelte";
  import Popup from "$lib/components/ui-layers/Popup.svelte";
  import Polyline from "$lib/components/vector-layers/Polyline.svelte";
  import type { MapOptions, TileLayerOptions } from "leaflet";

  let map: L.Map;
  const mapURL =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
  const mapOption: MapOptions = {
    center: [22.755920681486405, -114.65332031250001],
    zoom: 4,
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: "abcd",
  };

  let polyline: L.Polyline;

  const polylineLatLngs = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2],
  ];

  $: if (polyline && map) {
    map.fitBounds(polyline.getBounds());
  }
</script>

<div class="map-container">
  <Leaflet options={mapOption} bind:map>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    <Polyline
      options={{ color: "green", smoothFactor: 1 }}
      latLngs={polylineLatLngs}
      bind:polyline
    >
      <Popup>
        <strong>LA to Portland</strong>
      </Popup>
    </Polyline>
  </Leaflet>
</div>
