<script lang='ts'>
  import { page } from '$app/stores';
</script>

<nav>
  <!-- <a
    class='md:hover:text-blue-700 duration-150 text-lg'
    href='/' 
  >
    Demo
  </a> -->
  <a
    class={$page.url.pathname === '/sandbox' ? 'active-link' : ''}
    href='/sandbox'
  >
    Sandbox
  </a>
  <a
    class={$page.url.pathname === '/docs' ? 'active-link' : ''}
    href='/docs'
  >
    Docs
  </a>
  <a
    id='title'
    href='/'
    style='margin-left: 1rem; margin-right: auto;'
  >
    LeafletJS-Svelte
  </a>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Nunito Variable', sans-serif;
    font-weight: 400;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0.5rem;
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

  #title:hover {
    color: rgb(0, 93, 26);
  }

</style>