<script>
	import Header from '../components/Header.svelte';
	import { send, receive } from '../helpers/crossfade.js'
	import ExampleComponent from "../components/ExampleComponent.svelte";
	import Nav from '../components/Nav.svelte';
</script>

<aside class="sidebar">
	<!-- <Header/> -->
	<Nav/>
	<section class="sidebar-body">
		<h1>training<br>montage</h1>
	</section>
</aside>
<main>
	<section class="home">
		<p>I'm Jeff Caldwell, a computere science student who loves web development and JavaScript. I write about the things I'm learning here.</p>
		<p>You can also find me on twitter at: <a href="https://twitter.com/trainingm0ntage">@trainingm0ntage</a></p>
	</section>
</main>

<style>
	.home {
		margin-top: 3rem;
	}
</style>