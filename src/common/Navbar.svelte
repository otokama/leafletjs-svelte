<script>
  import { page } from '$app/stores';
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<nav>
  <a
    id='title'
    href='/'
    style='margin-left: 1rem; margin-right: auto;'
  >
    LeafletJS-Svelte
  </a>
  <!-- <a
    class={$page.url.pathname === '/sandbox' ? 'active-link' : ''}
    href='/sandbox'
  >
    Sandbox
  </a> -->
  <a
    class={$page.url.pathname.split('/')[1] === 'docs' ? 'active-link' : ''}
    href='/docs/1-getting-started'
  >
    Docs
  </a>

  <a
    href='https://github.com/otokama/leafletjs-svelte'
    target="_blank"
  >
    <Fa icon={faGithub} />
  </a>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    font-family: 'Nunito Variable', sans-serif;
    font-weight: 400;
    box-shadow: rgb(48, 48, 48, 0.3) 0 0 0.5em;
    background-color: white;
    z-index: 10;
  }

  nav a {
    text-decoration: none;
    font-size: large;
    margin: 1em 1em 1em 0;
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