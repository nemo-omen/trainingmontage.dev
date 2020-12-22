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

<nav id="top">
    <a href="/" rel="prefetch" class="{$page.path === '/' ? 'active' : 'normal'}">home</a>
    <a href="/blog" rel="prefetch" class="{$page.path === '/blog' || splitPage[1] === 'blog' ? 'active' : 'normal'}">blog</a>
    <a href="/about" rel="prefetch" class="{$page.path === '/about' ? 'active' : 'normal'}">about</a>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        font-family: var(--sans);
        padding: 0 1rem;
    }
    nav a {
        display: block;
        padding: 1rem 0.5rem;
        color: var(--light-gray);
        transition-property: all;
        transition-duration: 300ms;
        text-decoration: none;
    }
    nav a:hover {
        background: var(--light-gray);
        color: var(--dark-gray);
    }
    .active {
        background: var(--light-gray);
        color: var(--dark-gray);
    }

    @media (min-width: 600px) {
        nav {
            padding: 0 2rem;
        }
    }
    @media (min-width: 768px) {
        nav {
            padding: 0 2.5rem;
        }
    }
    @media (min-width: 1024px) {
        nav {
            padding: 0 2.75rem;
        }
    }
    @media (min-width: 1280px) {
        nav {
            padding: 0 3rem;
        }
    }
</style>