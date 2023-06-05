<script>
  import Fa from 'svelte-fa';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { base } from '$app/paths';
</script>

<nav>
  <a
    id='title'
    href="{base}/"
    style='margin-left: 1.3em; margin-right: auto;'
  >
    LeafletJS-Svelte
  </a>
  <a
    href="{base}/docs/1-getting-started"
  >
    Docs
  </a>

  <a
    href='https://github.com/otokama/leafletjs-svelte'
    target="_blank"
  >
    <Fa icon={faGithub} size='1.6x'/>
  </a>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Overpass Variable', sans-serif;
    box-shadow: rgb(48, 48, 48, 0.3) 0 0 0.5em;
    background-color: white;
    z-index: 10;
  }

  nav a {
    text-decoration: none;
    font-size: large;
    margin: 0.5em 1.4em 0.3em 0;
    transition: 200ms;
    color: black;
  }

  @media screen and (min-width: 764px) {
    nav a {
      margin: 0.8em 1.4em 0.7em 0;
    }
  }

  nav a:hover {
    text-decoration: underline;
    color: rgb(0, 116, 248);
  }

</style>