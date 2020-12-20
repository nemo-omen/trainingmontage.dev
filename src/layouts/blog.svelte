<script>
    import Header from '../components/Header.svelte';
import Nav from '../components/Nav.svelte';
    import { send, receive } from '../helpers/crossfade.js';
    export let greeting;
    export let title;
    export let date;
    export let author;
</script>
<aside class="sidebar">
    <!-- <Header/> -->
    <Nav/>
    <section class="sidebar-body">
        <h1>{title}</h1>
        <p>{date}, {author}</p>
    </section>
</aside>
<main>
    <!-- <h1>{greeting}</h1> -->
    <section class="blog-body">
        <slot></slot>
    </section>
</main>

<style>
:global(.blog-body > * + *) {
    @apply mt-12;
}
.sidebar-body h1 {
    @apply
        text-6xl;
}
</style>