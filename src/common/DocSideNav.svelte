<script lang="ts">
	import { page } from '$app/stores';
	import type { Docs } from '../routes/docs/types.js';
	export let docsSummary: Map<string, Docs[]>;
	const categories = [...docsSummary.keys()];
</script>

{#if docsSummary && docsSummary.size > 0}
	<ul class='sidenav'>
		{#each categories as category}
			<span class="nav-title">{category}</span>
      <ul>
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
      </ul>
		{/each}
	</ul>
{/if}

<style>
	.sidenav {
		position: fixed;
    height: 100%;
		top: 0;
		left: 0;
    width: 9rem;
    padding: 4.5em 2em 0 1.5em;
		display: flex;
		flex-direction: column;
		font-family: 'Overpass Variable', sans-serif;
		list-style-type: none;
    box-shadow: rgb(221, 221, 221) 0 0 0.6rem;
    z-index: 5;
	}

  ul ul {
    padding-left: 1em;
  }

	li {
		display: flex;
		justify-items: center;
		align-items: center;
		text-align: center;
    margin: 0.4em auto;
	}

	li a {
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
