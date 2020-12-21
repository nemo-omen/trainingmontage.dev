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
    <slot>
        <!-- your mdsvex content will load here -->
    </slot>
</main>

<style>
    /* style stuff will go here */
</style>