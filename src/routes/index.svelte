<script context="module">
  export function preload() {
    return this.fetch(`index.json`)
      .then((r) => r.json())
      .then((allPosts) => {
        const tweets = [...allPosts.tweets];
        const posts = [...allPosts.posts];

        return { tweets, posts };
      });
  }
</script>

<script>
  import Sidebar from '../components/Sidebar.svelte';
  import PostItem from '../components/PostItem.svelte';
  import TweetItem from '../components/TweetItem.svelte';
  import Skills from '../components/Skills.svelte';

  export let posts;
  export let tweets;
</script>

<Sidebar
  title={'training\nmontage'}
  expo="I'm Jeff Caldwell, a computer science student who loves web development and JavaScript. I write about the things I'm learning here.">
  <!-- <h2>What I Work With</h2>
  <Skills /> -->
  <section class="contact-info">
    <h2>On the web</h2>
    <p>
      twitter:
      <a href="https://twitter.com/trainingm0ntage">@trainingm0ntage</a>
    </p>
    <p>
      LinkedIn:
      <a href="https://www.linkedin.com/in/jeff-caldwell-4424181a">Jeff Caldwell</a>
    </p>
  </section>
</Sidebar>
<main>
  <section class="post-section">
    <h2>Latest from the <a href="/blog" rel="prefetch">blog</a></h2>
    {#each posts as post}
      <PostItem {post} />
    {/each}
  </section>
  <section class="tweets-section">
    <h2>
      Latest from
      <a href="https://twitter.com/trainingm0ntage">Twitter</a>
    </h2>
    {#each tweets as tweet}
      <TweetItem {tweet} />
    {/each}
  </section>
</main>

<style>
  .contact-info h2 {
    margin-bottom: 0.5rem;
  }
  .contact-info p {
    line-height: 1.2;
  }
</style>
