import { dev } from '$app/environment';
import { base } from '$app/paths';
import type { DocFrontmatter, Docs } from '../routes/docs/types.js';

const docCategories = [
	'Getting Started',
	'Basemap',
	'Controls',
	'UI Layers',
	'Raster Layers',
	'Vector Layers',
	'Other Layers',
	'Draw Tool'
];

export async function getCategorizedDocs() {
	const allDocsFiles = import.meta.glob('/src/routes/docs/*.md');
	const iterableDocFiles = Object.entries(allDocsFiles);
	const allDocs = await Promise.all(
		iterableDocFiles.map(async ([path, resolver]) => {
			const resolvedFiles: any = await resolver();
			const docMeta: DocFrontmatter = resolvedFiles.metadata;
			const postPath = path.slice(11, -3);
			return {
				meta: docMeta,
				path: postPath
			};
		})
	);

	const categorizedSummary = new Map<string, Docs[]>();
	docCategories.forEach((category) => {
		const docsMeta = allDocs.filter((doc) => doc.meta.category === category);
		if (docsMeta.length > 0) {
			docsMeta.sort((doc1, doc2) => doc1.meta.order - doc2.meta.order);
			const docs: Docs[] = docsMeta.map((docMeta) => ({
				title: docMeta.meta.title,
				path: dev ? docMeta.path : base + docMeta.path
			}));
			categorizedSummary.set(category, docs);
		} else {
			console.error(`Category ${category} have no docs found.`)
		}
	});
	return categorizedSummary;
}
