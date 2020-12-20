<script>
    import Nav from './Nav.svelte';
</script>

<header>
    <Nav/>
</header>

<style>
    header {
        @apply
            flex
            flex-row
            px-12
            border-b
            border-gray-300;
    }
</style>