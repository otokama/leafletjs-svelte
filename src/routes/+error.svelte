<script lang='ts'>
  import { page } from "$app/stores";

</script>

<div style='width: 100%; margin: auto 10rem;'>
  {#if $page.error}
    <p class='error'>{$page.error.message}</p>
  {:else}
    <p class='error'>Unknown error has occured</p>
  {/if}
</div>

<style>
  .error {
    font-family: 'Overpass Variable', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: rgb(238, 0, 0);
  }
</style>