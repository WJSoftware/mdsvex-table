<script
    lang="ts"
    module
>
    export { table, thead, tbody, tr, th, td } from '$lib/index.js';
    export { default as a } from './SmartLink.svelte';
</script>

<script lang="ts">
    import { setTableContext, TableContext } from '$lib/table-context.svelte.js';
    import type { Snippet } from 'svelte';
    import './md.css';
    import { setMdTableContext } from './md-table-context.js';

    type Props = {
        title?: string;
        description?: string;
        children?: Snippet;
    };

    let { title, description, children }: Props = $props();

    const tableCtx = setTableContext(new TableContext());
    setMdTableContext(tableCtx);
</script>

<svelte:head>
    <title>{title ?? 'mdsvex-table'}</title>
    <meta
        name="description"
        content={description ?? 'Responsive tables for your Markdown-generated document pages.'}
    />
</svelte:head>

{@render children?.()}
