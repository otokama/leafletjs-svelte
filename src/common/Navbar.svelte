<script lang='ts'>
  import { page } from '$app/stores';
</script>

<nav>
  <a
    href='/'
  >
    LeafletJS-Svelte
  </a>
  <!-- <a
    class='md:hover:text-blue-700 duration-150 text-lg'
    href='/' 
  >
    Demo
  </a> -->
  <a
    class={$page.url.pathname === '/docs' ? 'active-link' : ''}
    href='/docs'
  >
    Docs
  </a>
  <a
    class={$page.url.pathname === '/sandbox' ? 'active-link' : ''}
    href='/sandbox'
  >
    Sandbox
  </a>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: "Nunito";
    font-weight: 600;
  }

  nav a {
    text-decoration: none;
    font-size: large;
    margin: 1rem;
    transition: 200ms;
    color: black;
  }

  nav a:hover {
    color: rgb(0, 82, 114);
  }

  .active-link {
    color: rgb(0, 82, 114);
  }

</style>