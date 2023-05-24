<script lang='ts'>
  import '/src/styles/highlight/prism-base16-ateliersulphurpool.light.css';
  // import '/src/styles/highlight/prism-dracula.css';
  // import '/src/styles/highlight/prism-solarized-light.css';
  import DocSideNav from '../../common/DocSideNav.svelte';
  import type { Docs } from './types.js';
  export let data;
  const docsSummary: Map<string, Docs[]> = data.categorizedDocs;
</script>

<DocSideNav {docsSummary}/>
<div class='doc'>
  <slot/>
</div>