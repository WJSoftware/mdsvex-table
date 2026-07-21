<script lang="ts">
    import { ContainerContext, setContainerContext } from '$lib/container-context.svelte.js';
    import { tableContext } from '$lib/table-context.svelte.js';
    import type { Snippet } from 'svelte';
    import { inspectDebug } from '$lib/debug-utils.js';

    type Props = {
        children?: Snippet;
    };

    let { children }: Props = $props();

    const tableCtx = tableContext();
    tableCtx.header = setContainerContext(new ContainerContext('header'));
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
    role="rowgroup"
    data-mdsvex-table="thead"
    tabindex={-1}
>
    {@render children?.()}
</div>

<style>
    [data-mdsvex-table='thead'] {
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
</style>
