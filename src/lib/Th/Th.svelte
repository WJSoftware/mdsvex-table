<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLThAttributes } from "svelte/elements";
    import RsTh from "./RsTh.svelte";

    let {
        children,
        ...restProps
    }: HTMLThAttributes = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsTh {children} />
{:else}
    <th {...restProps}>
        {@render children?.()}
    </th>
{/if}
