<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLTableAttributes } from "svelte/elements";
    import RsTable from "./RsTable.svelte";

    let {
        children,
        ...restProps
    }: HTMLTableAttributes = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsTable {children} />
{:else}
    <table {...restProps}>
        {@render children?.()}
    </table>
{/if}
