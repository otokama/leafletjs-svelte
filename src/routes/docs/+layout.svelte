<script>
  import '/src/styles/codeblock/prism-dracula.css';
  import DocSideNav from '../../common/DocSideNav.svelte';
</script>

<svelte:head>
  <title>Docs - leafletjs-svelte</title>
</svelte:head>

<DocSideNav/>
<div class='doc'>
  <slot/>
</div>