<script lang='ts'>
  import { page } from "$app/stores";

</script>

<div style='width: 100%; margin: auto 10rem;'>
  <p class='error'>{$page.status} - {$page.error.message}</p>
</div>

<style>
  .error {
    font-family: 'Overpass Variable', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
</style>