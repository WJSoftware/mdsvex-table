<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { Snippet } from "svelte";

    type Props = {
        children?: Snippet;
    };

    let {
        children
    }: Props = $props();

    const tableCtx = tableContext();
</script>

<div role="table" data-mdsvex-table="table" aria-rowcount={tableCtx.body?.rows.length}>
    {@render children?.()}
</div>
