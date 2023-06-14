<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions, LayerGroup as LeafletLayerGroup, Polygon as LeafletPolygon } from 'leaflet';
  import type L from 'leaflet/index.js';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
  import Polygon from '$lib/components/vector-layers/Polygon.svelte';
  import LayerGroup from '$lib/components/other-layers/LayerGroup.svelte';
  import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';

	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const mapOption: MapOptions = {
    center: [39.554883059924016, -107.55517578125001],
    zoom: 5
  };
  const tileLayerOption: TileLayerOptions = {
    attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
    maxNativeZoom: 21,
    maxZoom: 20,
    subdomains: 'abcd'
  };

  const utahBorderCoor = [
		[42.000325, -114.049072],
		[42.008489, -111.060791],
		[40.996484, -111.060791],
		[41.004775, -109.061279],
		[37.011326, -109.061279],
		[37.011326, -114.060059]
	];
  const coloradoBorderCoor = [
		[41.004775, -109.083252],
		[41.004775, -102.062988],
		[37.002553, -102.041016],
		[37.011326, -109.050293],
		[41.004775, -109.083252]
	];

  let layerGroup: LeafletLayerGroup;
  let coloradoPolygon: LeafletPolygon;
  let leaflet: typeof L;

  $: if (layerGroup && leaflet) {
    layerGroup.addLayer(coloradoPolygon)
    layerGroup.eachLayer((layer) => {
      layer.bindPopup(leaflet.popup({ content: 'State Border' }))
    });
  }


</script>

<div class="map-container">
	<Leaflet options={mapOption} bind:Leaflet={leaflet}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
    <LayerGroup bind:layerGroup>
      <Polygon latLngs={utahBorderCoor} options={{color: 'green'}} />
    </LayerGroup>
    <Polygon latLngs={coloradoBorderCoor} bind:polygon={coloradoPolygon} >
      <Tooltip options={{direction: 'top'}}>Colorado</Tooltip>
    </Polygon>
	</Leaflet>
</div>