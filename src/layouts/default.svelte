<script>
    import Sidebar from '../components/Sidebar.svelte';
    export let title = '';
    export let expo = '';
    export let layout; //suppress unknown prop warning

    let thisLayout = layout;
</script>

<Sidebar
        {title}
        {expo}
    />
<main>
    <section class="post-section">
        <slot>
            <!-- your mdsvex content will load here -->
        </slot>
    </section>
</main>

<style>
    /* style stuff will go here */
</style>