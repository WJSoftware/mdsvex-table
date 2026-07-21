<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLAttributes } from "svelte/elements";
    import RsTr from "./RsTr.svelte";

    let {
        children,
        ...restProps
    }: HTMLAttributes<HTMLTableRowElement> = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsTr {children} />
{:else}
    <tr {...restProps}>
        {@render children?.()}
    </tr>
{/if}
