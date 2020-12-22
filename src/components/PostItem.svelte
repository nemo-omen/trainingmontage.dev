<script>
    export let post;
</script>

<article class="post-item">
    <header class="post-item-header">
        <hgroup>
            <a href={post.path} title={post.title}>
                <h2 class="post-item-title">{post.title}</h2>
            </a>
                <h3 class="post-item-meta">{post.date}</h3>
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
        letter-spacing: 0.025rem;
        margin: 0;
        font-weight: 500;
    }
    .post-item-meta {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: var(--dark-gray);
        font-weight: 400;
        font-family: var(--serif);
    }
</style>