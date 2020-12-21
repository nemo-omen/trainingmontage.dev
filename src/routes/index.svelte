<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(allPosts => {
			const tweets = [...allPosts.tweets];
			const posts = [...allPosts.posts];

			return {tweets, posts};
		});
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import { send, receive } from '../helpers/crossfade.js'
	import ExampleComponent from "../components/ExampleComponent.svelte";
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import PostItem from '../components/PostItem.svelte'
	import TweetItem from '../components/TweetItem.svelte';

	export let posts;
	export let tweets;
</script>

<Sidebar
	title={"trainingmontage"}
	expo="I'm Jeff Caldwell, a computere science student who loves web development and JavaScript. I write about the things I'm learning here.">
	<h2>On the web</h2>
	<p>twitter: <a href="https://twitter.com/trainingm0ntage" class="text-blue-300">@trainingm0ntage</a></p>
	<p>LinkedIn: <a href="https://www.linkedin.com/in/jeff-caldwell-4424181a" class="text-blue-300">Jeff Caldwell</a></p>
</Sidebar>
<main>
	<section class="post-section">
			<h2 class="mt-0">
				Latest from the <a href="/blog" rel="prefetch">blog</a>
			</h2>
		{#each posts as post}
			<PostItem {post} />
		{/each}
	</section>
	<section class="sidebar-tweets">
		<h2>
			Latest from <a href="https://twitter.com/trainingm0ntage">Twitter</a>
		</h2>
		{#each tweets as tweet}
			<TweetItem {tweet} />
		{/each}
	</section>
</main>

<style>
	:global(.post-section > * + *) {
		@apply mt-16;
	}

	.sidebar-tweets {
		@apply
			mt-24;
	}
	:global(.sidebar-tweets > * + *) {
		@apply
			mt-12;
	}
</style>