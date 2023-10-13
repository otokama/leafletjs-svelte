import { error } from '@sveltejs/kit';
import type { DocFrontmatter } from '../types.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`).catch((err) => {
		throw error(404, 'Not Found');
	});
	const docs: DocFrontmatter = post.metadata;
	if (!docs.category || !docs.order || !docs.title) {
		throw error(500, `Markdown file < ${params.slug}.md > is missing required frontmatter param`);
	}
	const content = post.default;
	return {
		content,
		docs
	};
}
