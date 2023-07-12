<script lang="ts">
    import type { Map, MapOptions, TileLayerOptions } from 'leaflet';
    import Leaflet from '$lib/components/Leaflet.svelte';
    import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
    import ScaleControl from '$lib/components/control-layers/ScaleControl.svelte';

	let map: Map;
    
    const mapURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const mapOption: MapOptions = {
        center: [39.73, -104.99],
        zoom: 10
	};

	const tileLayerOption: TileLayerOptions = {
		attribution: `&copy;<a href="https://www.openstreetmap.org/copyright"
        target="_blank">OpenStreetMap</a>
        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	const scaleOptions = {
		maxWidth: 200,
		imperial: false
	};
</script>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
        <TileLayer tileURL={mapURL} options={tileLayerOption} />
        <ScaleControl position="bottomleft" options={scaleOptions} />
	</Leaflet>
</div>

<style>
	.map-container {
		height: 300px;
		width: 100%;
	}
</style>
