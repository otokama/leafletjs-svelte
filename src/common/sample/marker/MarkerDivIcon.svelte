<script lang="ts">
	import { base } from '$app/paths';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import DivIcon from '$lib/components/ui-layers/DivIcon.svelte';
	import Marker from '$lib/components/ui-layers/Marker.svelte';
	import type { Map, MapOptions, TileLayerOptions } from 'leaflet';

	let map: Map;
	const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	const mapOption: MapOptions = {
		center: [40.785091, -73.968285],
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
</script>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />

		<Marker latLng={[40.771133, -73.974187]}>
			<DivIcon options={{ iconAnchor: [54, 54] }}>
				<div class="div-icon">
					<img src="{base}/park_icon.png" alt="park_icon" style="width: 45px;" />
					<span>Central Park</span>
				</div>
			</DivIcon>
		</Marker>
	</Leaflet>
</div>

<style>
	.div-icon {
		width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		padding: 1em;
		white-space: nowrap;
		color: #076900;
		font-size: 14px;
		font-weight: 800;
		font-family: 'Overpass Variable', sans-serif;
	}
</style>
