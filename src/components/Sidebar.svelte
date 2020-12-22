<script>
    import Nav from './Nav.svelte'
    export let title;
    export let meta = undefined;
    export let expo = '';
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