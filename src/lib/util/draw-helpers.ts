import type { DrawLayerType } from '$lib/types/DrawLayerTypes.js';
import type L from 'leaflet';

function layerToGeojson(layer: L.Layer, layerType: DrawLayerType) {
	let coors: number[][] | number[] = [];
	if (layerType === 'polygon' || layerType === 'rectangle') {
		coors = flipCoorToGeojson(layer.getLatLngs()[0]);
	} else if (layerType === 'circle' || layerType === 'marker' || layerType === 'circlemarker') {
		const latLng: L.LatLng = layer.getLatLng();
		coors = [latLng.lng, latLng.lat];
	} else if (layerType === 'polyline') {
		coors = flipCoorToGeojson(layer.getLatLngs());
	}

	return {
		type: 'Feature',
		geometry: {
			type: layerType,
			coordinates: coors
		}
	};
}

function flipCoorToGeojson(latLngs: L.LatLng[]) {
	let res = [];
	for (const latLng of latLngs) {
		res.push([latLng.lng, latLng.lat]);
	}
	return res;
}

export { layerToGeojson };
