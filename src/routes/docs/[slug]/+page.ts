import { error } from '@sveltejs/kit';
import type { Docs } from '../types.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`).catch(err => {
    throw error(404, 'Not Found');
  });
  const docs: Docs = post.metadata;
  if (!docs) {
    throw error(500, 'Markdown file is missing required frontmatter param');
  }
  const content = post.default
  return {
    content,
    docs
  };
}