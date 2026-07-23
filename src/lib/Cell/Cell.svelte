<script lang="ts">
    import { rowContext } from '$lib/row-context.js';
    import type { Snippet } from 'svelte';

    type Props = {
        children?: Snippet;
    }

    let { children }: Props = $props();

    const rowCtx = rowContext();
    // svelte-ignore state_referenced_locally
    rowCtx.children.push(children);
</script>
