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
                <h1>{title}</h1>
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
    @apply
        bg-gray-800
        text-gray-200;
}


.sidebar-body {
    @apply
        p-12;
}

.sidebar-body > * + * {
    @apply
        mt-24;
}

.sidebar-body h1 {
    @apply
        text-6xl
        leading-tight
        font-semibold;
}

.meta {
    @apply
    text-blue-300
    mt-6;
}
.meta p {
    @apply
        text-base
        leading-snug;
}
.meta p + * {
    @apply
        mt-2;
}
.expo {
    @apply
        italic;
}

:global(.extra > h2 + *) {
    @apply
        mt-4;
}
:global(.extra > p + p) {
    @apply
        mt-2;
}
</style>