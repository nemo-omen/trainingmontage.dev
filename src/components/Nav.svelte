<script>
    import {onMount} from 'svelte';
    import {stores} from '@sapper/app';
    const {page} = stores();

    onMount(() => {
        console.log('$page', $page);
    });
</script>

<nav>
    <a href="/" rel="prefetch" class="{$page.path === '/' ? 'active' : 'normal'}">home</a>
    <a href="/mdsvex" rel="prefetch" class="{$page.path === '/mdsvex' ? 'active' : 'normal'}">mdsvex</a>
    <a href="/twitter" rel="prefetch" class="{$page.path === '/twitter' ? 'active' : 'normal'}">twitter</a>
</nav>

<style>
    nav {
        @apply
            flex
            flex-row;
    }
    nav a {
        @apply
            block
            transition-all
            duration-300
            px-2
            py-4;
    }
    nav a:hover {
        @apply 
            bg-gray-300;
    }
    .active {
        @apply bg-gray-300;
    }
</style>