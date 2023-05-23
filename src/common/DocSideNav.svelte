<script lang="ts">
	import { page } from '$app/stores';
	import type { Docs } from '../routes/docs/types.js';
	export let docsSummary: Map<string, Docs[]>;
	const categories = [...docsSummary.keys()];
</script>

{#if docsSummary && docsSummary.size > 0}
	<ul>
		{#each categories as category}
			<li><span class="nav-title">{category}</span></li>
			{#each docsSummary.get(category) as doc}
				<li>
					<a 
            href={doc.path}
            class={$page.url.pathname === doc.path ? 'active-link' : ''}
          >
						{doc.title}
					</a>
				</li>
			{/each}
		{/each}
	</ul>
{/if}

<style>
	ul {
		position: fixed;
		top: 5em;
		left: 0.5em;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		font-family: 'Overpass Variable', sans-serif;
		list-style-type: none;
	}

	li {
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
	}

	li a {
		margin-left: 0.8em;
		text-decoration: none;
		color: rgb(93, 93, 93);
		font-weight: 500;
		transition: 250ms;
	}

	li a:hover {
		color: rgb(0, 77, 202);
    text-decoration: underline;
	}

	.active-link {
		color: rgb(0, 116, 248);
    text-decoration: underline;
	}

	.nav-title {
		color: rgb(34, 34, 34);
		font-size: 19px;
		font-weight: 700;
	}
</style>
