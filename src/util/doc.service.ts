import type { Docs } from "../routes/docs/types.js";
export async function getCategorizedDocs() {
  const allDocsFiles = import.meta.glob('/src/routes/docs/*.md');
  const iterableDocFiles = Object.entries(allDocsFiles);
  const allDocs = await Promise.all(
    iterableDocFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath,
      };
    })
  );
  let categorizedSummary = new Map<string, Docs[]>();

  for (let doc of allDocs) {
    const { meta, path } = doc;
    if (!categorizedSummary.has(meta.category)) {
      categorizedSummary.set(meta.category, [{
        title: meta.title,
        path
      }]);
    } else {
      let docs: Docs[] = categorizedSummary.get(meta.category) || [];
      docs.push({
        title: meta.title,
        path
      });
      categorizedSummary.set(meta.category, docs);
    }
  }
  return categorizedSummary;
}