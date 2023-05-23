import { getCategorizedDocs } from '../../util/doc.service.js';
import type { Docs } from './types.js';
/** @type {import('./$types').PageLoad} */
export async function load() {
  const categorizedDocs: Map<string, Docs[]> = await getCategorizedDocs();
  return { categorizedDocs };
}