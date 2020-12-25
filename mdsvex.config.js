import { mdsvex } from 'mdsvex';
import path from 'path';
import Prism from 'prismjs';
import slug from 'rehype-slug';

import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-markdown';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prism-svelte';
import 'prismjs/components/prism-json';

export const mdsvexOptions = mdsvex({
  layout: {
    default: path.resolve(__dirname, 'src/layouts/default.svelte'),
    blog: path.resolve(__dirname, 'src/layouts/blog.svelte'),
  },
  rehypePlugins: [slug],
  highlight: {
    highlighter: (code, lang) => {
      if (lang && Prism.languages[lang]) {
        const parsed = Prism.highlight(code, Prism.languages[lang], lang);
        const escaped = parsed.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
        const langTag = 'language-' + lang;
        const codeTag = `<code class="${langTag}">${escaped}</code>`;
        const wrapped = `<pre class="${langTag} code-pre line-numbers">${codeTag}</pre>`;
        return wrapped;
      } else {
        const escaped = code.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
        return `<pre class="code-pre line-numbers"><code>${escaped}</code></pre>`;
      }
    },
  },
});
