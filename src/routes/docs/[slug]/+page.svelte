<script>
  export let data;
</script>

<svelte:head>
  <title>{data.docs.title} - Docs - leafletjs-svelte</title>
</svelte:head>

<svelte:component this={data.content} />