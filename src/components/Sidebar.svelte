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
        text-gray-200
        ;
}

.sidebar-body {
    @apply
        xl:p-12
        lg:p-12
        md:p-8
        sm:p-8
        p-8;
}

.sidebar-body p {
    @apply
        xl:text-xl
        lg:text-xl
        md:text-base
        sm:text-base
        text-base;
}
.sidebar-body > * + * {
    @apply
        xl:mt-24
        lg:mt-16
        md:mt-12
        sm:mt-8
        mt-8
        ;
}

.sidebar-body h1 {
    @apply
        xl:text-6xl
        lg:text-5xl
        md:text-4xl
        sm:text-3xl
        text-3xl
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

:global(.extra h2) {
    @apply
        xl:text-3xl
        lg:text-2xl
        md:text-xl
        sm:text-xl
        text-xl;
}
:global(.extra > h2 + *) {
    @apply
        mt-4;
}
:global(.extra p) {
    @apply
        xl:text-xl
        lg:text-xl
        md:text-lg
        sm:text-base
        text-base;
}
:global(.extra > p + p) {
    @apply
        mt-2;
}
</style>