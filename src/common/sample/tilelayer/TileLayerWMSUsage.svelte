<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions, IconOptions } from 'leaflet';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
  import TileLayerWms from '$lib/components/raster-layers/TileLayerWMS.svelte';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [37.09024, -95.712891],
    zoom: 3
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: 'abcd'
  };

</script>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />

    <TileLayerWms
      tileURL="https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi?"
      options={{
        layers: 'mrms_p72h',
        format: 'image/png',
        transparent: true,
        attribution: "Weather data © 2023 IEM MRMS",
        opacity: 0.37
      }}
    />

	</Leaflet>
</div>