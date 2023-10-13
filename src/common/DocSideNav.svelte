<script lang="ts">
	import { page } from '$app/stores';
	import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { slide } from 'svelte/transition';
	import type { Docs } from '../routes/docs/types.js';
	export let docsSummary: Map<string, Docs[]>;
	export let expandSideNav: boolean = true;
	let tempExpandSideNav: boolean = false;
	const categories = [...docsSummary.keys()];

	$: if (expandSideNav) {
		tempExpandSideNav = false;
	}
</script>

<div class="sidenav-container">
	{#if docsSummary && docsSummary.size > 0}
		{#if expandSideNav || tempExpandSideNav}
			<ul class="sidenav" transition:slide={{ duration: 200, axis: 'x' }}>
				{#each categories as category}
					<span class="nav-title">{category}</span>
					<ul>
						{#each docsSummary.get(category) as doc}
							<li>
								<a
									href={doc.path}
									class={$page.url.pathname === doc.path ? 'active-link' : ''}
									on:click={() => (tempExpandSideNav = false)}
								>
									{doc.title}
								</a>
							</li>
						{/each}
					</ul>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<button
	class="sidenav-toggle"
	hidden={expandSideNav}
	on:click={() => (tempExpandSideNav = !tempExpandSideNav)}
>
	<Fa size="lg" icon={tempExpandSideNav ? faArrowLeft : faBars} />
</button>

<style>
	.sidenav-container {
		position: fixed;
		height: 100%;
		top: 0;
		left: 0;
		width: auto;
		overflow-y: auto;
		background-color: #676778;
		box-shadow: rgba(67, 67, 67, 0.6) 0 0 0.5em;
		z-index: 5;
	}
	.sidenav {
		padding: 5.5em 2em 2em 1.5em;
		display: flex;
		flex-direction: column;
		font-family: 'Overpass Variable', sans-serif;
		white-space: nowrap;
		margin: 0;
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
		color: #fefefe;
		font-weight: 300;
		cursor: pointer;
	}

	li a:hover {
		text-decoration: underline;
	}

	.active-link {
		font-weight: 600;
	}

	.nav-title {
		color: rgb(245, 245, 245);
		font-size: 19px;
		font-weight: 500;
	}

	.sidenav-toggle {
		position: fixed;
		bottom: 1.5em;
		left: 1.5em;
		z-index: 10;
		padding: 0.7em;
		background-color: rgba(186, 186, 186, 0.7);
		backdrop-filter: blur(10px);
		border: solid 2px rgb(211, 211, 211);
		border-radius: 0.3em;
		cursor: pointer;
		transition: 100ms;
	}

	.sidenav-toggle:hover {
		background-color: rgba(244, 244, 244, 0.8);
	}

	.sidenav-toggle:active {
		background-color: rgb(205, 255, 205);
	}
</style>
