<script>
    import { stores } from '@sapper/app';
    import { onMount } from 'svelte';
    import Sidebar from '../components/Sidebar.svelte';
    export let title;
    export let date;
    export let author;
    export let description = '';
    export let layout; //suppress unknown prop warning

    const { page } = stores();

    let thisLayout = layout; // haha suppress unused prop warning

    let postSection;
    $: headings = [];

    function replaceHeaderHrefs(node) {
        console.log(node.href);
    }

    function getHeaderList(pageSection) {
        const headerNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
        const allChildren = Array.from(pageSection.childNodes);
        const headerList = allChildren.map((node) => {
            if(headerNames.includes(node.nodeName)) {
                return {id: node.id, title: node.innerText, level: Number.parseInt(node.nodeName.replace('H', ''))};
            }
        }).filter((listItem) => listItem !== undefined);
        return headerList;
    }

    
    onMount(() => {
        headings = getHeaderList(postSection);
    });
</script>
<svelte:head>
    <link rel="stylesheet" href="css/prism-nord.css">
</svelte:head>
    <Sidebar
        meta={{author: author, date: date}}
        {title}
        expo={description}
        tocList={headings}
    />
<main>
    <section class="blog-section" bind:this={postSection}>
            <slot></slot>
    </section>
</main>

<style>
    :global(.blog-section p) {
        margin-bottom: 3rem;
    }
:global(code:not(pre)) {
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
    color: var(--light-gray);
    background-color: var(--dark-gray);
    font-weight: 400;
    padding: 0 0.25rem 3px 0.25rem;
}

:global(.blog-section pre) {
    background-color: var(--dark-gray) !important;
    border-radius: 0 !important;
    margin-bottom: 3rem !important;
}
:global(.blog-section pre code) {
    font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
    font-weight: 400;
}

/* deal with first-line indentation issues from prism */
:global(.language-svelte > .token.script, .language-svelte > .token.style) {
		display: block;
	}
:global(.language-svelte > .token.script, .language-svelte > .token.style) {
    text-indent: 2em;
}
</style>