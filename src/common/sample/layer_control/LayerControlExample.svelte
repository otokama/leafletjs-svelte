<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import LayerControl from '$lib/components/control/LayerControl.svelte';
	import LayerGroup from '$lib/components/other-layers/LayerGroup.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import VideoOverlay from '$lib/components/raster-layers/VideoOverlay.svelte';
	import Polygon from '$lib/components/vector-layers/Polygon.svelte';
	import { TileLayerWMS } from '$lib/index.js';
	import { cartoMapURL, mapTilerURL, satelliteImageryURL } from '$lib/util/mapUtils.js';
	import type { MapOptions, TileLayerOptions, WMSOptions } from 'leaflet';

	const mapOption: MapOptions = {
		center: [40.84706035607122, -107.40234375000001],
		zoom: 3
	};

	const mapTilerOptions: TileLayerOptions = {
		attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const cartoTileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>&copy;
      <a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const tileLayerWMSUrl = 'https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi?';
	const tileLayerWMSOptions: WMSOptions = {
		layers: 'mrms_p72h',
		format: 'image/png',
		transparent: true,
		attribution: 'Weather data © 2023 IEM MRMS',
		opacity: 0.37
	};

	const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm';
	const videoBounds = [
		[32, -130],
		[13, -100]
	];

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
</script>

<div class="map-container">
	<Leaflet options={mapOption}>
		<LayerControl>
			<TileLayer tileURL={mapTilerURL} options={mapTilerOptions} layerControlName="MapTiler" />
			<TileLayer
				tileURL={satelliteImageryURL}
				options={mapTilerOptions}
				layerControlName="Satellite"
			/>
			<TileLayer tileURL={cartoMapURL} options={cartoTileLayerOption} layerControlName="CARTO" />

			<TileLayerWMS
				tileURL={tileLayerWMSUrl}
				options={tileLayerWMSOptions}
				layerControlName="WMS"
			/>
			<VideoOverlay video={videoUrl} bounds={videoBounds} layerControlName="patricia_nasa" />

			<LayerGroup layerControlName="State Borders">
				<Polygon latLngs={utahBorderCoor} />
				<Polygon latLngs={wyBorderCoor} />
				<Polygon latLngs={coloradoBorderCoor} />
			</LayerGroup>
		</LayerControl>
	</Leaflet>
</div>
