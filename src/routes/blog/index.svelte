<script context="module">
    	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return {posts};
		});
	}
</script>

<script>
    import Sidebar from '../../components/Sidebar.svelte';
    import PostItem from '../../components/PostItem.svelte';

    export let posts;
</script>

<Sidebar
    title="blog"
>
    <p>Thoughts on web development, web design, and anything else I think about.</p>
</Sidebar>

<main>
    <section class="posts">
        {#each posts as post}
            <PostItem {post}/>
        {/each}
    </section>
</main>

<style>
:global(.posts > * + *) {
    @apply 
        mt-16;
}
</style>