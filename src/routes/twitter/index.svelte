<script context="module">
    export function preload() {
		return this.fetch(`twitter.json`).then(r => r.json()).then(tweets => {
			return {tweets};
		});
	}
</script>

<script>
    import { send, receive } from '../../helpers/crossfade.js';
    import Header from '../../components/Header.svelte';
    import { HeartIcon, RepeatIcon, MessageSquareIcon } from 'svelte-feather-icons';

    export let tweets = [];

    console.log('tweets: ', tweets);

    let punctuationArray = ['.', ',', ';', ':'];

    function replaceWithUserLinks(word) {
        if(word[0] === '@') {
            word = word.replace('@', '');
        }
        return word;
    }

    function toWordArray(text) {
        const wordArray = text.replace(/[.,;:`]/g,"").trim().split(' ');
        return wordArray;
    }


</script>
<aside class="sidebar">
    <Header/>
    <section class="sidebar-body">    
        <h1>
            trainingmontage
        </h1>
        <h1>twitter</h1>
    </section>
</aside>
<main>
    <section class="tweets">
    {#each tweets as tweet}
    <a href="http://twitter.com/{tweet.user.screen_name}/status/{tweet.id_str}">
        <article class="tweet">
            <header>
                <div class="avatar">
                    <img src="{tweet.user.profile_image_url}" alt="{tweet.user.screen_name}" width="48" height="48" loading="lazy"/>
                </div>
                <div class="names">
                    <h3>
                        {tweet.user.name}
                    </h3>
                    <h4>
                        @{tweet.user.screen_name}
                    </h4>
                </div>
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
            <footer>
                <p>{new Date(tweet.created_at).toLocaleDateString()}, {new Date(tweet.created_at).toLocaleTimeString()}</p>
                <div class="tweet-icons">
                    <div class="{tweet.favorited === true ? 'text-red-400' : 'text-gray-800'}">
                        <HeartIcon size="1.2x"/>
                    </div>
                    <RepeatIcon size="1.2x"/>
                    <MessageSquareIcon size="1.2x"/>
                </div>
            </footer>
        </article>
    </a>
    {/each}
</section>
</main>

<style>
    .tweets {
        margin-top: 3rem;
    }
    .tweet {
        margin-bottom: 3rem;
        border: 1px solid #bababa;
        padding: 1rem;
        box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .tweet > * + * {
        margin-top: 1rem;
    }
    .tweet header {
        @apply
            flex
            flex-row
            justify-start
            items-center
            gap-4;
    }
    .avatar img{
        border-radius: 50%;
    }
    .names {
        font-size: 1.25rem;
    }
    .names h3  {
        font-weight: bold;
        margin-top: 0 !important;
    }
    .names h4 {
        font-family: monospace;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    .tweet-body p {
        line-height: 1.2;
    }
    .user-link {
        color: #4e6aa5;
        transition-property: all;
        transition-duration: 300ms;
    }
    .user-link:hover {
        color: #203e7e;
    }
    footer {
        @apply
            flex
            flex-row
            justify-between
            items-baseline
            gap-8;
    }
    footer .tweet-icons {
        @apply
            flex
            flex-row
            justify-evenly
            items-baseline
            gap-12;
    }
</style>