<script lang="ts">
    import { tableContext } from "$lib/table-context.svelte.js";
    import type { HTMLAttributes } from "svelte/elements";
    import RsThead from "./RsThead.svelte";

    let {
        children,
        ...restProps
    }: HTMLAttributes<HTMLTableSectionElement> = $props();

    const tableCtx = tableContext();
</script>

{#if tableCtx.mq.current}
    <RsThead {children} />
{:else}
    <thead {...restProps}>
        {@render children?.()}
    </thead>
{/if}
