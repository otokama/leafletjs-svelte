<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import '/src/styles/style.css';
  import Navbar from "../common/Navbar.svelte";
  
</script>

<Navbar />

{#key $page.url.pathname.slice(0, 5)}
  <div in:fade={{duration: 150}}>
    <main>
      <slot />
    </main>
  </div>
{/key}