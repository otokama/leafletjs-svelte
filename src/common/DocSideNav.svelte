<script lang="ts">
	import { page } from '$app/stores';
	import type { Docs } from '../routes/docs/types.js';
  import { fade, fly } from 'svelte/transition';
  import Fa from 'svelte-fa';
  import { faBars, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
	export let docsSummary: Map<string, Docs[]>;
  export let expandSideNav: boolean = true;
  let tempExpandSideNav: boolean = false;
	const categories = [...docsSummary.keys()];

  $: if (expandSideNav) {
    tempExpandSideNav = false;
  }

</script>

{#if docsSummary && docsSummary.size > 0}
  {#if expandSideNav || tempExpandSideNav}
    <ul
      class='sidenav'
      transition:fly={{x: -50, duration: 200}}
    >
      {#each categories as category}
        <span class="nav-title">{category}</span>
        <ul>
          {#each docsSummary.get(category) as doc}
            <li>
              <a 
                href={doc.path}
                class={$page.url.pathname === doc.path ? 'active-link' : ''}
                on:click={() => tempExpandSideNav = false}
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

<button
  class='sidenav-toggle'
  hidden={expandSideNav}
  on:click={() => tempExpandSideNav = !tempExpandSideNav}
>
  <Fa size='lg' icon={tempExpandSideNav ? faArrowLeft : faBars} />
</button>

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
    background-color: #676778;
    box-shadow: rgba(67, 67, 67, 0.6) 0 0 0.5em;
    z-index: 5;
    overflow-y: auto;
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
		color: rgb(222, 222, 222);
		font-weight: 400;
    cursor: pointer;
	}

	li a:hover {
    text-decoration: underline;
	}

	.active-link {
    text-decoration: underline;
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
