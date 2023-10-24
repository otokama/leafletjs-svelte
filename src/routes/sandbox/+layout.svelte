<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
</script>

<nav class="sandbox-nav">
  <a
    href={`${base}/sandbox/1`}
    class={$page.url.pathname === "/sandbox/1"
      ? "active-sandbox-nav-btn"
      : "sandbox-nav-btn"}
  >
    Sandbox 1
  </a>
  <a
    href={`${base}/sandbox/2`}
    class={$page.url.pathname === "/sandbox/2"
      ? "active-sandbox-nav-btn"
      : "sandbox-nav-btn"}
  >
    Sandbox 2
  </a>
</nav>

<slot />

<style>
  .sandbox-nav {
    display: flex;
    flex-direction: row;
    margin-left: 1.5em;
    margin-bottom: 2em;
    gap: 0.7em;
    font-family: "Overpass Variable", sans-serif;
    transition: 50ms;
  }
  .sandbox-nav a {
    text-decoration: none;
    padding: 0.5em 0.8em;
  }
  .sandbox-nav-btn {
    background-color: #efefef;
    color: black;
  }
  .active-sandbox-nav-btn {
    background-color: #7d7d7dab;
    color: white;
  }
</style>
