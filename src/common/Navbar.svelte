<script lang='ts'>
  import { page } from '$app/stores';
</script>

<nav>
  <a
    class={$page.url.pathname === '/sandbox' ? 'active-link' : ''}
    href='/sandbox'
  >
    Sandbox
  </a>
  <a
    class={$page.url.pathname.split('/')[1] === 'docs' ? 'active-link' : ''}
    href='/docs/1-getting-started'
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
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    font-family: 'Nunito Variable', sans-serif;
    font-weight: 400;
    box-shadow: rgb(210, 210, 210) 0 0 0.6rem;
    background-color: white;
    z-index: 10;
  }

  nav a {
    text-decoration: none;
    font-size: large;
    margin: 1rem;
    transition: 200ms;
    color: black;
  }

  nav a:hover {
    color: rgb(0, 77, 202);
  }

  .active-link {
    color: rgb(0, 116, 248);
  }

  #title:hover {
    color: rgb(0, 93, 26);
  }

</style>