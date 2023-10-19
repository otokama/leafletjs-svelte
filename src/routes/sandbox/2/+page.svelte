<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import LayerControl from '$lib/components/control/LayerControl.svelte';
	import LayerGroup from '$lib/components/other-layers/LayerGroup.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';
	import Polygon from '$lib/components/vector-layers/Polygon.svelte';
	import { cartoMapURL, mapTilerURL, satelliteImageryURL } from '$lib/util/mapUtils.js';
	import type LType from 'leaflet';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

	const mapOption: MapOptions = {
		center: [39.554883059924016, -111.55517578125001],
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

	const wyBorderCoor = [
		[45.011419, -111.060791],
		[41.004775, -111.060791],
		[41.004775, -104.0625],
		[45.003651, -104.0625],
		[45.011419, -111.060791]
	];
	let L: typeof LType;
	let map: L.Map;
	let mapContainerHeight: number = 0;

	const onMapReady = (mapObj: L.Map) => {
		map = mapObj;
	};

	$: if (mapContainerHeight && map) {
		map.invalidateSize();
	}

	// const addLayer = (layerGroup: L.LayerGroup) => {
	// 	layerGroup.eachLayer((layer) => {
	// 		layer.bindPopup(L.popup({ content: 'State Border' }));
	// 	});
	// };
</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="example">
	<div class="map-container" bind:clientHeight={mapContainerHeight}>
		<Leaflet options={mapOption} bind:Leaflet={L} {onMapReady}>
			<LayerControl>
				<TileLayer
					tileURL={satelliteImageryURL}
					options={tileLayerOption}
					layerControlName="Satellite"
				/>
				<TileLayer tileURL={cartoMapURL} options={tileLayerOption} layerControlName="CARTO" />
				<TileLayer tileURL={mapTilerURL} options={tileLayerOption} layerControlName="MapTiler" />

				<LayerGroup layerControlName="Overlays">
					<Polygon latLngs={utahBorderCoor} />
					<Polygon latLngs={wyBorderCoor} />
				</LayerGroup>
				<LayerGroup>
					<Polygon latLngs={coloradoBorderCoor}>
						<Tooltip options={{ direction: 'top' }}>Colorado</Tooltip>
					</Polygon>
				</LayerGroup>
			</LayerControl>
		</Leaflet>
	</div>
</div>

<style>
	.map-container {
		height: 700px;
		resize: vertical;
		overflow: auto;
	}
</style>
