<script lang="ts">
	import type { Map, MapOptions, TileLayerOptions, IconOptions } from 'leaflet';
	import L from 'leaflet';
	import Leaflet from '$lib/components/Leaflet.svelte';
	import TileLayer from '$lib/components/raster-layers/TileLayer.svelte';
	import Marker from '$lib/components/ui-layers/Marker.svelte';
  import DivIcon from '$lib/components/ui-layers/DivIcon.svelte';
  import Icon from '$lib/components/ui-layers/Icon.svelte';

	let map: Map;
	const mapURL =
		'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}@2x.png?key=5RRPejawRNE6xUzV3e5M';
	// const satelliteURL = 'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=f9BfrPfH9duxJflw5vTh';
	const mapOption: MapOptions = {
		center: [40.7249822, -74.006205],
		zoom: 11
	};
	const tileLayerOption: TileLayerOptions = {
		attribution: `<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>`,
		maxNativeZoom: 20,
		maxZoom: 23
	};
  
  const markerIconOptions: IconOptions = {
    iconUrl: 'svelte_logo.svg',
    iconSize: [35, 35]
  };

  let marker: L.Marker;

  $: if (marker) {
    marker.on('mouseover', () => {
      let icon = marker.getIcon();
      icon.options.iconSize = [50, 50];
      marker.setIcon(icon);
    });
    marker.on('mouseout', () => {
      let icon = marker.getIcon();
      icon.options.iconSize = [30, 30];
      marker.setIcon(icon);
    });
  }

</script>

<svelte:head>
	<title>Sandbox - leafletjs-svelte</title>
</svelte:head>

<div class="map-container">
	<Leaflet bind:map options={mapOption}>
		<TileLayer tileURL={mapURL} options={tileLayerOption} />
		<Marker latLng={L.latLng([40.7249822, -74.006205])} />
    <Marker latLng={L.latLng([40.6501, -73.9495800])} bind:marker={marker}>
      <Icon options={markerIconOptions} />
    </Marker>
    <Marker latLng={L.latLng([40.771133, -73.974187])}>
      <DivIcon options={{iconAnchor: [54, 54]}}>
        <div class='div-icon'>
          <img src='/park_icon.png' alt='park_icon' style="width: 45px;">
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