<script>
    import {onMount} from 'svelte';
    import {stores} from '@sapper/app';
    const {page} = stores();
    const splitPage = $page.path.split('/');

    onMount(() => {
        console.log('$page', $page);
        console.log(splitPage);
    });
</script>

<nav>
    <a href="/" rel="prefetch" class="{$page.path === '/' ? 'active' : 'normal'}">home</a>
    <a href="/blog" rel="prefetch" class="{$page.path === '/blog' || splitPage[1] === 'blog' ? 'active' : 'normal'}">blog</a>
    <a href="/about" rel="prefetch" class="{$page.path === '/about' ? 'active' : 'normal'}">about</a>
</nav>

<style>
    nav {
        @apply
            flex
            flex-row
            xl:px-12
            lg:px-12
            md:px-8
            sm:px-8
            px-8
            ;
    }
    nav a {
        @apply
            block
            transition-all
            duration-300
            px-2
            py-4
            text-gray-100;
    }
    nav a:hover {
        @apply
            bg-gray-300
            text-gray-900;
    }
    .active {
        @apply
            bg-gray-300
            text-gray-900;
    }
</style>