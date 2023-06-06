// Testing basemap
import BaseMapTest from "./Map.svelte";
import { render } from '@testing-library/svelte';
import { get, writable } from 'svelte/store';
import html from 'svelte-htm';
import type { Map, TileLayer } from "leaflet";
import L from 'leaflet';

describe("Initializing base map", () => {
  test("Should render a base map with tilelayer", () => {
    const mapStore = writable<Map>();
    const tileLayerStore = writable<TileLayer>();
    render(html`<${BaseMapTest} bind:map=${mapStore} bind:tileLayer=${tileLayerStore} />`);
    const map: Map = get(mapStore);
    const tileLayer: TileLayer = get(tileLayerStore);
    expect(map.getCenter()).toStrictEqual(L.latLng([40.7249822, -74.006205]));
    expect(map.getZoom()).toBe(11);
    expect(map.hasLayer(tileLayer));
  });
});