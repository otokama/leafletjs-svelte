import { writable } from 'svelte/store';

// check if there if already a baselayer added to map
export const hasBaseLayer = writable<boolean>(false);
