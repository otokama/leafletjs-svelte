<script lang='ts'>
  import { page } from "$app/stores";
</script>

<div class='error-container'>
  {#if $page.status === 404}
    <p class='error'>Hmm... Page doesn't exist</p>
  {:else}
    <p class='error'>Unknown error has occured</p>
  {/if}
</div>

<style>
  .error-container {
    margin: auto 1.5em;
  }

  .error {
    font-family: 'Overpass Variable', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: rgb(238, 0, 0);
  }
</style>