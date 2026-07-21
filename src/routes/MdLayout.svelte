<script lang="ts" module>
    export { table, thead, tbody, tr, th, td } from '$lib/index-table.js';
</script>
<script lang="ts">
    import { setTableContext, TableContext } from "$lib/table-context.svelte.js";
    import type { Snippet } from 'svelte';
    import './md.css';

    type Props = {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();

    // svelte-ignore state_referenced_locally
    const tableCtx = setTableContext(new TableContext());
</script>

{@render children?.()}
