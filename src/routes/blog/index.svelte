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
    expo="Thoughts on web development, web design, and anything else I think about."
>

</Sidebar>

<main>
    <section class="post-section">
        {#each posts as post}
            <PostItem {post}/>
        {/each}
    </section>
</main>

<style>

</style>