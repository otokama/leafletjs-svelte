<script>
  import './style.css';
  import Navbar from "../common/Navbar.svelte";
  import 'leaflet/dist/leaflet.css';
</script>

<Navbar />
<main>
  <slot />
</main>