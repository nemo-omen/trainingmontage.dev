<script>
	import Icon from './Icon.svelte';
</script>

<nav class="web-icons-nav">
	<div class="icon">
		<a href="https://github.com/nemo-omen">
			<Icon name="github"/>
		</a>
	</div>
	<div class="icon">
		<a href="https://twitter.com/trainingm0ntage">
			<Icon name="twitter"/>
		</a>
	</div>
	<div class="icon">
		<a href="https://www.linkedin.com/in/jeff-caldwell-4424181a">
			<Icon name="linkedin"/>
		</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		gap: 2rem;
	}
	.icon {
		font-size: 1.5rem;
	}
</style>