<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLAttributes } from "svelte/elements";
    import RsTbody from "./RsTbody.svelte";

    let {
        children,
        ...restProps
    }: HTMLAttributes<HTMLTableSectionElement> = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsTbody {children} />
{:else}
    <tbody {...restProps}>
        {@render children?.()}
    </tbody>
{/if}
