<script>
    import { onMount } from 'svelte';
    import { cssVariables } from '../helpers/cssvariables.js'
    import Nav from './Nav.svelte';
    import TOC from './TOC.svelte';

    export let title;
    export let meta = undefined;
    export let expo = '';
    export let tocList = undefined;



    let sidebar;
    $: sidebarHeight = 0;
    $: sidebarWidth = 0;

    const sidebarSmall = 500;

    onMount(() => {
        sidebarHeight = getComputedStyle(sidebar).height;
        sidebarWidth = getComputedStyle(sidebar).width;
    });
</script>

<aside class="sidebar" bind:this={sidebar}>
        <Nav/>
        <section class="sidebar-body">
            <section class="heading-section">
                <h1 class="heading-xl">{title}</h1>
                {#if meta !== undefined}
                    <section class="meta">
                        <p>{meta.author}</p>
                        <p>{meta.date}</p>
                    </section>
                {/if}
            </section>
            <section class="expo-section">
                <p class="expo">
                    {expo}
                </p>
            </section>
            <section class="extra" use:cssVariables={{sidebarHeight: sidebarHeight}}>
                <slot/>
                {#if tocList !== undefined}
                <TOC {tocList}/>
                {/if}
            </section>
        </section>
</aside>
<style>
    .sidebar {
        background-color: var(--dark-gray);
        color: var(--light-gray);
    }
    :global(.sidebar a) {
        color: var(--light-blue);
    }
    :global(.sidebar a:hover) {
        color: var(--blue);
    }
    .sidebar-body {
        /* padding: 1rem; */
    }
    .sidebar-body > * + * {
        /* margin-top: 2rem; */
        padding: 0 2rem;
    }
    .heading-xl {
        font-size: 2.75rem;
        padding: 0 2rem;
        font-weight: 400;
        margin-top: 2rem;
        /* line-height: 1.375; */
    }
    .meta {
        margin: 1.5rem 0 2rem 0;
        padding: 0 2rem;
        color: var(--light-blue);
    }
    .meta p {
        line-height: 1;
    }
    .meta p + * {
        margin-top: 0.5rem;
    }
    .expo-section {
        background-color: var(--accent);
    }
    .expo {
        font-style: italic;
        color: var(--dark-gray);
    }
    @media (min-width: 600px) {
        .heading-xl {
            /* font-size: 3.25rem; */
            padding: 0 2rem;
        }
        .sidebar-body {
            /* padding: 2rem; */
        }
        .sidebar-body > * + * {
            /* margin-top: 2.25rem; */
            padding: 2rem 2.25rem;
        }
        .meta {
            padding: 0 2.25rem;
        }
    }
    @media (min-width: 768px) {
        .heading-xl {
            /* font-size: 3.5rem; */
            padding: 0 2.5rem;
        }
        .sidebar-body {
            /* padding: 2.5rem; */
        }
        .sidebar-body > * + * {
            /* margin-top: 2.5rem; */
            padding: 2rem 2.5rem;
        }
        .meta {
            padding: 0 2.5rem;
        }
    }
    @media (min-width: 1024px) {
        .sidebar {
            width: 40%;
            min-width: 40%;
        }
        .heading-xl {
            /* font-size: 3.75rem; */
            padding: 0 2.75rem;
        }
        .sidebar-body {
            /* padding: 2.75rem; */
        }
        .sidebar-body > * + * {
            /* margin-top: 2.75rem; */
            padding: 2rem 2.75rem;
        }
        .meta {
            padding: 0 2.75rem;
        }
        .extra {
            height: var(--sidebarHeight);
        }
    }
    @media (min-width: 1280px) {
        .sidebar {
            width: 33%;
            min-width: 33%;
        }
        .heading-xl {
            /* font-size: 3.75rem; */
            padding: 0 3rem;
        }
        .sidebar-body {
            /* padding: 3rem; */
        }
        .sidebar-body > * + * {
            /* margin-top: 3rem; */
            padding: 2rem 3rem;
        }
        .meta {
            padding: 0 3rem;
        }
        .extra {
            height: var(--sidebarHeight);
        }
    }
</style>