<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import { ExternalLink } from '@lucide/svelte';

    type Props = HTMLAnchorAttributes & {
        noIcon?: boolean;
    };

    let { children, rel, noIcon, ...restProps }: Props = $props();

    const finalRel = $derived.by(() => {
        const relValues = new Set((rel ?? '').split(' ').filter(Boolean));
        relValues.add('nofollow');
        relValues.add('noreferrer');
        return Array.from(relValues).join(' ');
    });
</script>

<a
    {...restProps}
    target="_blank"
    rel={finalRel}
>
    {@render children?.()}&nbsp;{#if !noIcon}<ExternalLink size="0.8em" />{/if}
</a>
