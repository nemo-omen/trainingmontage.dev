<script>
    import { stores } from '@sapper/app';
    import Nav from './Nav.svelte'

    const { page } = stores();
    export let title;
    export let meta = undefined;
    export let expo = '';
    export let tocList = undefined;
</script>

<aside class="sidebar">
        <Nav/>
        <section class="sidebar-body">
            <hgroup>
                <h1 class="heading-xl">{title}</h1>
                {#if meta !== undefined}
                    <section class="meta">
                        <p>{meta.author}</p>
                        <p>{meta.date}</p>
                    </section>
                {/if}
            </hgroup>
            <p class="expo">
                {expo}
            </p>
            <section class="extra">
                <slot/>
                {#if tocList !== undefined}
                <section class="table-of-contents">
                    <h4 class="toc-heading">Table of Contents</h4>
                    <ul class="toc-list">
                        {#each tocList as tocItem}
                        <li class="toc-item" style="padding-left: {tocItem.level > 2 ? (tocItem.level / 2) * 0.5 : 0}rem"><a href="{$page.path}#{tocItem.id}">{tocItem.title}</a></li>
                        {/each}
                    </ul>
                </section>
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
        padding: 1rem;
    }
    .sidebar-body > * + * {
        margin-top: 2rem;
    }
    .heading-xl {
        font-size: 2.875rem;
        font-weight: 600;
        line-height: 1.375;
    }
    .table-of-contents {
        padding: 2rem 0 0 0;
        margin: 0 auto;
    }
    .toc-heading {
        font-size: 1.875rem;
        font-weight: 500;
    }
    .toc-list {
        padding: 1rem 2rem 0 0;
        margin: 0;
    }
    .toc-item {
        list-style-type: none;
        margin: 0;
        padding: 0.25rem 0 0 0;
        font-size: 1.5rem;
        font-family: var(--sans);
        font-weight: 400;
    }
    .meta {
        margin-top: 1.5rem;
        color: var(--light-blue);
    }
    .meta p {
        line-height: 1;
    }
    .meta p + * {
        margin-top: 0.5rem;
    }
    .expo {
        font-style: italic;
    }
    @media (min-width: 600px) {
        .heading-xl {
            font-size: 3.25rem;
        }
        .sidebar-body {
            padding: 2rem;
        }
        .sidebar-body > * + * {
            margin-top: 2.25rem;
        }
    }
    @media (min-width: 768px) {
        .heading-xl {
            font-size: 3.5rem;
        }
        .sidebar-body {
            padding: 2.5rem;
        }
        .sidebar-body > * + * {
            margin-top: 2.5rem;
        }
    }
    @media (min-width: 1024px) {
        .sidebar {
            width: 40%;
            min-width: 40%;
        }
        .heading-xl {
            font-size: 3.75rem;
        }
        .sidebar-body {
            padding: 2.75rem;
        }
        .sidebar-body > * + * {
            margin-top: 2.75rem;
        }
    }
    @media (min-width: 1280px) {
        .sidebar {
            width: 33%;
            min-width: 33%;
        }
        .heading-xl {
            font-size: 3.75rem;
        }
        .sidebar-body {
            padding: 3rem;
        }
        .sidebar-body > * + * {
            margin-top: 3rem;
        }
    }
</style>