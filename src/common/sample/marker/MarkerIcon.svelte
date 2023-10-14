<script lang="ts">
	import { base } from '$app/paths';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Icon from '$lib/components/ui-layers/Icon.svelte';
	import Marker from '$lib/components/ui-layers/Marker.svelte';
	import type { IconOptions, MapOptions, TileLayerOptions } from 'leaflet';

	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [40.650002, -73.949997],
		zoom: 11
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap</a>
      &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const markerIconOptions: IconOptions = {
		iconUrl: `${base}/svelte_logo.svg`,
		iconSize: [35, 35]
	};
</script>

<div class="map-container">
	<Leaflet options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />

		<Marker latLng={[40.6501, -73.94958]}>
			<Icon options={markerIconOptions} />
		</Marker>
	</Leaflet>
</div>
