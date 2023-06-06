<script>
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import '/src/styles/style.css';
  import Navbar from "../common/Navbar.svelte";
  import L from 'leaflet';
  import { base } from '$app/paths';
  import { dev } from '$app/environment';

  if ( !dev ) {
    L.Icon.Default.prototype.options.iconUrl = `${base}/leaflet-asset/marker-icon.png`;
    L.Icon.Default.prototype.options.shadowUrl = `${base}/leaflet-asset/marker-shadow.png`;
    L.Icon.Default.prototype.options.iconRetinaUrl = `${base}/leaflet-asset/leaflet-marker-icon-2x.png`;
  }
  
</script>

<Navbar />

{#key $page.url.pathname.slice(0, 5)}
  <div in:fade={{duration: 150}}>
    <main>
      <slot />
    </main>
  </div>
{/key}