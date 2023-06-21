<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import '/src/styles/style.css';
  import Navbar from "../common/Navbar.svelte";
  
</script>

<Navbar />

<main>
  <slot />
</main>