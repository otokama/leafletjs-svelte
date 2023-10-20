<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Popup from '$lib/components/ui-layers/Popup.svelte';
	import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';
	import Polygon from '$lib/components/vector-layers/Polygon.svelte';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [39.35129, -108.495483],
		zoom: 5
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
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
</script>

<div class="map-container">
	<Leaflet options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />

		<Polygon options={{ color: 'purple' }} latLngs={utahBorderCoor}>
			<Popup>
				<strong>Utah</strong>
			</Popup>
		</Polygon>

		<Polygon latLngs={coloradoBorderCoor}>
			<Tooltip options={{ direction: 'top' }}>Colorado</Tooltip>
		</Polygon>
	</Leaflet>
</div>
