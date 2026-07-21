<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLTdAttributes } from "svelte/elements";
    import RsTd from "./RsTd.svelte";

    let {
        children,
        ...restProps
    }: HTMLTdAttributes = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsTd {children} />
{:else}
    <td {...restProps}>
        {@render children?.()}
    </td>
{/if}
