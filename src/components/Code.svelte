<script context="module">
  export const globalConfig = { transform: (x) => x };
</script>

<script>
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-diff';
  import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
  import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
  import 'prismjs/components/prism-json';
  import 'prismjs/plugins/line-numbers/prism-line-numbers';
  import 'prismjs/components/prism-markdown';
  import 'prism-svelte';

  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    indent: 0,
  });

  export let language = undefined;
  export let transform = (x) => x;

  let element;
  let highlighted = '';

  function highlight(code, lang) {
    let body = globalConfig.transform(code);
    body = transform(body);
    if (lang && Prism.languages[lang]) {
      const parsed = Prism.highlight(body, Prism.languages[lang], lang);
      const escaped = parsed.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
      highlighted = escaped;
    } else {
      const escaped = body.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
      highlighted = escaped;
    }
  }
  onMount(() => {
    const code = element.textContent;
    highlight(code, language);
  });
</script>

<code bind:this={element} style="display: none">
  <slot />
</code>

<pre
  class="language-{language} command-line line-numbers"
  data-output="2-17">
  <code
    class="language-{language}">
    {@html highlighted}
  </code>
</pre>

<!--<style>
  pre code {
    white-space: pre-wrap;
  }
</style>-->
