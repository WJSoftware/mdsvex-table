<script lang="ts" module>
    export const testId = 'test-layout';
</script>
<script lang="ts">
    import Table from '$lib/Table/Table.svelte';
    import { setTableContext, TableContext } from '$lib/table-context.svelte.js';
    import type { TableContextOptions } from '$lib/types.js';
    import type { Snippet } from 'svelte';

    type Props = {
        tableCtx?: TableContext;
        ctxOptions?: TableContextOptions
        children?: Snippet;
    };

    let {
        tableCtx = $bindable(),
        ctxOptions,
        children,
    }: Props = $props();

    // svelte-ignore state_referenced_locally
    tableCtx = setTableContext(new TableContext(ctxOptions));
</script>

<div data-testid={testId}>
    <Table>
        {@render children?.()}
    </Table>
</div>
