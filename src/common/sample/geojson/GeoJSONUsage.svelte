<script lang="ts">
	import type { GeoJSONOptions, MapOptions, TileLayerOptions } from 'leaflet';
  import { base } from '$app/paths';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
  import GeoJson from '$lib/components/other-layers/GeoJSON.svelte';
	import FeatureGroup from '$lib/components/other-layers/FeatureGroup.svelte';

	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [39.554883059924016, -107.55517578125001],
		zoom: 4
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

  async function getGeoJSON() {
    const res = await fetch(`${base}/geojson/example.geojson`);
    return await res.json();
  }

  const geojsonOptions: GeoJSONOptions = {
    onEachFeature: function(feature, layer) {
      layer.bindTooltip(feature.properties.label, {
        className: 'example-geojson-tooltip',
        direction: 'center'
      });
    },
    style: function(feature) {
      return {
        color: feature?.properties.color
      };
    }
  };

</script>

<div class="map-container geojson-map">
  <Leaflet options={mapOption}>
    <TileLayer tileURL={mapURL} options={tileLayerOption} />
    {#await getGeoJSON() then geojsonData}
      <GeoJson data={geojsonData} options={geojsonOptions} />
    {/await}
  </Leaflet>
</div>