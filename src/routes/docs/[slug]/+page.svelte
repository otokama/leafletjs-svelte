<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>{data.docs.title} - Docs - leafletjs-svelte</title>
</svelte:head>

{#key $page.url.pathname}
	<div in:fade={{ duration: 100 }}>
		<svelte:component this={data.content} />
	</div>
{/key}
