<script lang='ts'>
  import '/src/styles/highlight/prism-base16-ateliersulphurpool.light.css';
  // import '/src/styles/highlight/prism-dracula.css';
  // import '/src/styles/highlight/prism-solarized-light.css';
  import DocSideNav from '../../common/DocSideNav.svelte';
  import type { Docs } from './types.js';
  export let data;

  const docsSummary: Map<string, Docs[]> = data.categorizedDocs;
  let expandSideNav: boolean = true;
  let pageWidth: number = 0;
  
  $: if (pageWidth < 850) {
    expandSideNav = false;
  } else {
    expandSideNav = true;
  }
</script>

<DocSideNav {docsSummary} bind:expandSideNav={expandSideNav}/>
<div
  class={expandSideNav ? 'sidenav-doc doc' : 'doc'}
>
  <slot/>
</div>

<div bind:clientWidth={pageWidth}/>