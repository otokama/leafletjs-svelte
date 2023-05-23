<script lang='ts'>
  import '/src/styles/codeblock/prism-dracula.css';
  import DocSideNav from '../../common/DocSideNav.svelte';
  import type { Docs } from './types.js';
  export let data;
  const docsSummary: Map<string, Docs[]> = data.categorizedDocs;
</script>

<DocSideNav {docsSummary}/>
<div class='doc'>
  <slot/>
</div>