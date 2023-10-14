import type { Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import BaseMap from './BaseMap.test.svelte';

describe('Leaflet', () => {
	it('mounts Leaflet basemap with a tilelayer', () => {
		cy.mount(BaseMap);
		cy.window()
			.should('have.property', 'leafletmap')
			.then((mapObj: any) => {
				const map: Map = mapObj as Map;
				expect(map.getCenter()).to.deep.equal(L.latLng(40.7249822, -74.006205));
				expect(map.getZoom()).to.equal(11);
			});
	});
});
