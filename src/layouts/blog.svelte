<script>
    import Sidebar from '../components/Sidebar.svelte';
    export let title;
    export let date;
    export let author;
    export let description = '';
    export let layout; //suppress unknown prop warning

    let thisLayout = layout;
</script>
<svelte:head>
    <link rel="stylesheet" href="css/prism-nord.css">
</svelte:head>
    <Sidebar
        meta={{author: author, date: date}}
        {title}
        expo={description}
    />
<main>
    <section class="post-section">
        <slot></slot>
    </section>
</main>

<style>
:global(.post-section pre) {
    margin-top: 3rem !important;
    background-color: rgb(31, 41, 55) !important;
    border-radius: 0 !important;
}

:global(code:not(pre)) {
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
    @apply text-blue-900;
}

:global(.post-section pre code) {
    @apply
        bg-gray-800;
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
}

/* deal with first-line indentation issues from prism */
:global(.language-svelte > .token.script, .language-svelte > .token.style) {
		display: block;
	}
:global(.language-svelte > .token.script, .language-svelte > .token.style) {
    text-indent: 2em;
}
</style>