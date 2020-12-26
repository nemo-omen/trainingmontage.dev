<script context="module">
  export const preload = () => {};
</script>

<script>
  import { onMount } from 'svelte';
  import { stores } from '@sapper/app';

  // You may not want to use `segment`, but it is passed for the time being and will
  // create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
  // https://github.com/sveltejs/sapper/issues/824
  export let segment = '';
  // Silence unused export property warning
  // eslint-disable-next-line no-empty
  if (segment) {
  }

  const { page } = stores();
  $: path = $page.path.slice(1);
  onMount(() => {
    console.log(path);
  });
</script>

<svelte:head>
  <title>{path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home'}</title>
</svelte:head>
<div id="app">
  <slot />
</div>

<style>
</style>
