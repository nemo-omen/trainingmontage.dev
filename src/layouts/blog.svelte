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
    <section class="post-section" bind:this={postSection}>
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