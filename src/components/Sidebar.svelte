<script>
  import { onMount } from 'svelte';
  import { cssVariables } from '../helpers/cssvariables.js';
  import Nav from './Nav.svelte';
  import TOC from './TOC.svelte';

  export let title;
  export let meta = undefined;
  export let expo = '';
  export let tocList = undefined;

  let sidebar;
  $: sidebarHeight = 0;
  $: sidebarWidth = 0;

  const sidebarSmall = 500;

  onMount(() => {
    sidebarHeight = getComputedStyle(sidebar).height;
    sidebarWidth = getComputedStyle(sidebar).width;
  });
</script>

<aside class="sidebar" bind:this={sidebar}>
  <Nav />
  <section class="sidebar-body">
    <section class="heading-section">
      <h1 class="heading-xl">{title}</h1>
      {#if meta !== undefined}
        <section class="meta">
          <p>{meta.author}</p>
          <p>{meta.date}</p>
        </section>
      {/if}
    </section>
    <section class="expo-section">
      <p class="expo">{expo}</p>
    </section>
    <section class="extra" use:cssVariables={{ sidebarHeight: sidebarHeight }}>
      <slot />
      {#if tocList !== undefined}
        <TOC {tocList} />
      {/if}
    </section>
  </section>
</aside>

<style>
  .sidebar {
    background-color: var(--dark-gray);
    color: var(--light-gray);
  }
  .heading-xl {
    font-weight: 400;
    /* line-height: 1; */
    margin: 0;
    font-size: var(--h1);
    word-break: break-word;
  }
  .sidebar-body {
    padding: var(--main-padding);
  }
  .sidebar-body > * + * {
    margin-top: 3vw;
  }
  .meta {
    color: var(--light-blue);
  }
  .meta p {
    line-height: 1;
  }
  .expo {
    font-style: italic;
  }
  .extra {
    height: var(--sidebarHeight);
  }
  :global(.sidebar a) {
    color: var(--light-blue);
  }
  :global(.sidebar a:hover) {
    color: var(--blue);
  }
</style>
