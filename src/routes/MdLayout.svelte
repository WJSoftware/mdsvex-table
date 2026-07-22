<script lang="ts" module>
    export { table, thead, tbody, tr, th, td } from '$lib/index.js';
</script>
<script lang="ts">
    import { setTableContext, TableContext } from "$lib/table-context.svelte.js";
    import type { Snippet } from 'svelte';
    import './md.css';
    import { setMdTableContext } from './md-table-context.js';

    type Props = {
        children?: Snippet;
    }

    let {
        children
    }: Props = $props();

    const tableCtx = setTableContext(new TableContext());
    setMdTableContext(tableCtx);
    console.log('Table context set.');
</script>

{@render children?.()}
