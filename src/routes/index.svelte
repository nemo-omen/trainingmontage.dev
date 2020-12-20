<script>
	import Header from '../components/Header.svelte';
	import { send, receive } from '../helpers/crossfade.js'
	import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<aside class="sidebar">
	<Header/>
	<section class="sidebar-body">
		<h1>trainingmontage</h1>
	</section>
</aside>
<main>
	<section class="home">
		<ExampleComponent
		title="🌐 Sapper with PostCSS project base"
		paragraph="This is an example route and component to make sure everything's working." />
	</section>
</main>

<style>
	.home {
		margin-top: 3rem;
	}
</style>