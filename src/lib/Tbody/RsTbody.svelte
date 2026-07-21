<script lang="ts">
    import type { Snippet } from "svelte";
    import { tableContext } from "$lib/table-context.svelte.js";
    import { ContainerContext, setContainerContext } from "$lib/container-context.svelte.js";

    type Props = {
        children?: Snippet;
    };

    let {
        children
    }: Props = $props();

    const tableCtx = tableContext();
    tableCtx.body = setContainerContext(new ContainerContext('body'));
</script>

<div role="rowgroup" data-mdsvex-table="tbody">
    {@render children?.()}
</div>
