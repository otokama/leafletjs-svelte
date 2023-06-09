import BaseMap from './BaseMap.test.svelte';
import type { Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

describe('Leaflet', () => {
  it('mounts Leaflet map with a tilelayer', () => {
    cy.mount(BaseMap);
    cy.window().should('have.property', 'leafletmap').then((mapObj: any) => {
      const map: Map = mapObj as Map;
      expect(map.getCenter()).to.deep.equal(L.latLng(40.7249822, -74.006205));
      expect(map.getZoom()).to.equal(11);
    });
    
  });
});