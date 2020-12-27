<script>
  import BoxSizing from './components/BoxSizing.svx';
  import Sidebar from '../../components/Sidebar.svelte';
</script>

<svelte:head>
  <link rel="stylesheet" href="css/prism-nord.css" />
</svelte:head>

<Sidebar title="CSS Playground" />

<main>
  <section class="post-section">
    <p>
      CSS is one of those things that can be described in very dualistic terms.
      It's simple but complex. It's easy, but it's also pretty difficult (at
      least, once a project starts getting complex). In truth, just like with
      anything having to do with web design and development, it's just something
      that you have to learn well enough that you don't drive yourself crazy.
    </p>

    <p>
      Luckily, once you start to learn some of the intricacies of CSS it starts
      to get pretty fun.
    </p>
    <p>
      In that spirit, I'm creating a CSS Playground. The idea is to have
      something that gives you immediate feedback when you change a given value.
      Think of it as an interactive cheatsheet.
    </p>

    <!-- <h2>Box Model</h2>
    <p>
      Everything in CSS revolves, more or less, around the
      <em>box model</em>.
    </p>
    <section class="demo">
      <BoxSizing />
    </section>
  </section> -->
  </section>
</main>

<style>
  .demo {
    margin: var(--spacer) auto;
    width: clamp(50%, 40vw, 100%);
  }

  :global(.post-section pre, .post-section pre code) {
    background-color: var(--dark-gray) !important;
    border-radius: 0 !important;
  }
</style>
