<script
    lang="ts"
    module
>
    export { table, thead, tbody, tr, th, td } from '$lib/index.js';
    export { default as a } from './SmartLink.svelte';
</script>

<script lang="ts">
    import type { Snippet } from 'svelte';
    import './md.css';
    import { CircleSlash2 } from '@lucide/svelte';
    import { mdTableContext } from './md-table-context.js';
    import { setTableContext } from '$lib/table-context.svelte.js';
    import { emptyContentContext } from './empty-content-context.svelte.js';

    type Props = {
        title?: string;
        description?: string;
        children?: Snippet;
    };

    let { title, description, children }: Props = $props();
    const tableCtx = mdTableContext();
    setTableContext(tableCtx);
    const emptyCtx = emptyContentContext();

    $effect(() =>{
        tableCtx.emptyCellContent = emptyCtx.useEmptyContent ? emptyCell : undefined;
    });
</script>

{#snippet emptyCell()}
    <CircleSlash2 size="1em" />
{/snippet}

<svelte:head>
    <title>{title ?? 'mdsvex-table'}</title>
    <meta
        name="description"
        content={description ?? 'Responsive tables for your Markdown-generated document pages.'}
    />
</svelte:head>

<article>
    {@render children?.()}
</article>
