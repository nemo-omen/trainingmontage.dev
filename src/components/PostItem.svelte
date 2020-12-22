<script>
    export let post;
</script>

<article class="post-item">
    <header class="post-item-header">
            <a href={post.path} title={post.title}>
                <h2 class="post-item-title">{post.title}</h2>
            </a>
            <p class="post-item-meta">{post.date}</p>
        </header>
        <section class="post-item-body">
            <p>
                {post.description}
            </p>
    </section>
</article>

<style>
    .post-item-title {
        letter-spacing: 0.025rem;
        margin-bottom: 0;
    }
    .post-item-meta {
        font-size: 1rem;
        margin-top: 0.5rem;
        color: var(--dark-gray);
        font-weight: 400;
        font-family: var(--serif);
    }
</style>