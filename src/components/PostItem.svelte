<script>
    export let post;
</script>

<article class="post-item">
    <header class="post-item-header">
        <hgroup>
            <a href={post.path} title={post.title}>
                <h2 class="post-item-title">{post.title}</h2>
                <h3 class="post-item-meta">{post.date}</h3>
            </a>
        </hgroup>
    </header>
    <section class="post-item-body">
        <p>
            {post.description}
        </p>
    </section>
</article>

<style>
    .post-item-title {
        @apply
            tracking-wide
            m-0
            font-medium;
    }
    .post-item-meta {
        @apply
            mt-2
            text-gray-700
            text-base
            font-normal
            font-serif;
    }
</style>