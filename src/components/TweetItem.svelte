<script>
    export let tweet;

    function replaceWithUserLinks(word) {
        if(word[0] === '@') {
            word = word.replace('@', '');
        }
        return word;
    }

    function toWordArray(text) {
        const wordArray = text.replace(/[:`]/g,"").trim().split(/\s+/);
        return wordArray;
    }
</script>

<article class="tweet">
    <header>
        <a href="http://twitter.com/{tweet.user.screen_name}/status/{tweet.id_str}">
            {new Date(tweet.created_at).toLocaleDateString()}, {new Date(tweet.created_at).toLocaleTimeString()}
        </a>
    </header>
    <section class="tweet-body">
        <p>
            {#each toWordArray(tweet.text) as word}
                {#if word[0] === '@'}
                    <a class="user-link" href="http://twitter.com/{word.replace('@', '')}">{word}</a>{' '}
                {:else if word[0] === '#'}
                    <a class="user-link" href="http://twitter.com/hashtag/{word.replace('#', '')}?src=hashtag_click">{word}</a>{' '}
                {:else}
                    {word + ' '}
                {/if}
            {/each}
        </p>
    </section>
</article>

    <style>
        p {
            @apply
                text-base;
        }
    </style>