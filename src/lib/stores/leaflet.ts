import { writable } from "svelte/store";
import type L from "leaflet/index.js";

export const leaflet = writable<typeof L>();