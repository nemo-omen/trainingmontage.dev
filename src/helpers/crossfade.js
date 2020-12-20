import { circInOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

const [send, receive] = crossfade({
    duration: d => Math.sqrt(d* 300),
    fallback(node, params) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;

        return {
            duration: 600,
            easing: circInOut,
            css: t => `
                transform: ${transform} scale(${t})
                opacity: ${t}
            `
        };
    }
});

export {send, receive};