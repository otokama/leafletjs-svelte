<script lang="ts">
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Tooltip from '$lib/components/ui-layers/Tooltip.svelte';
	import CircleMarker from '$lib/components/vector-layers/CircleMarker.svelte';
	import type { MapOptions, TileLayerOptions } from 'leaflet';

	let map: L.Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [47.60621, -122.32207],
		zoom: 13
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
      target="_blank">OpenStreetMap </a>&copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};
</script>

<div class="map-container">
	<Leaflet options={mapOption} bind:map>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
		<CircleMarker latLng={[47.61322, -122.3465]} options={{ radius: 20 }} />

		<CircleMarker latLng={[47.600164266, -122.288998844]} options={{ color: 'green', radius: 30 }}>
			<Tooltip options={{ content: 'Leschi, Seattle', offset: [35, 0] }} />
		</CircleMarker>
	</Leaflet>
</div>
