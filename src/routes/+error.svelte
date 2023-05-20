<script lang='ts'>
  import { page } from "$app/stores";

</script>

<div class='min-h-screen w-full flex justify-center items-center'>
  <p class='text-lg'>{$page.status}: {$page.error.message}</p>
</div>