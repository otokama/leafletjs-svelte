import type L from 'leaflet/index.js';
import { writable } from 'svelte/store';

export const leaflet = writable<typeof L>();
