<script lang="ts">
    import type { HTMLAnchorAttributes } from 'svelte/elements';
    import ExternalLink from './ExternalLink.svelte';
    import { page } from '$app/state';

    let {
        href,
        children,
        ...restProps
    }: HTMLAnchorAttributes = $props();

    const isExternal = $derived.by(() => {
        try {
            const url = new URL(href ?? '');
            return url.origin !== page.url.origin;
        } catch {
            return false;
        }
    });
</script>

{#if isExternal}
    <ExternalLink
        href={href}
        {children}
        {...restProps}
    />
{:else}
    <a
        href={href}
        {...restProps}
    >
        {@render children?.()}
    </a>
{/if}
