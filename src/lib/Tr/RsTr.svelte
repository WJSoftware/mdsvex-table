<script lang="ts">
    import { ChildrenContext } from '$lib/children-context.svelte.js';
    import { setRowContext } from '$lib/row-context.js';
    import { tableContext } from '$lib/table-context.svelte.js';
    import type { Snippet } from 'svelte';
    import { containerContext } from '$lib/container-context.svelte.js';

    type Props = {
        children?: Snippet;
    };

    let { children }: Props = $props();

    const ctx = setRowContext(new ChildrenContext());
    const containerCtx = containerContext();
    const rowIndex = containerCtx.rows.push(ctx);
    const tableCtx = tableContext();
</script>

{#snippet headerRow()}
    {#each ctx.children as column, idx (idx)}
        <div
            role="columnheader"
            aria-colindex={idx + 1}
            data-mdsvex-table="th"
        >
            {@render column?.()}
        </div>
    {/each}
{/snippet}

{#snippet headerContent(colIndex: number)}
    {#each tableCtx.header?.rows as row, rowIdx (rowIdx)}
        {@render row.children[colIndex]?.()}
    {/each}
{/snippet}

<div
    role="row"
    data-mdsvex-table="tr"
>
    {@render children?.()}
    {#if containerCtx.type === 'header'}
        {@render headerRow?.()}
    {:else}
        <dl>
            {#each ctx.children as cell, idx (idx)}
                <dt>
                    <div data-mdsvex-table="th">
                        {@render headerContent(idx)}
                    </div>
                </dt>
                <dd>
                    <div
                        role="cell"
                        aria-colindex={idx + 1}
                        aria-rowindex={rowIndex}
                        data-mdsvex-table="td"
                    >
                        {@render cell?.()}
                    </div>
                </dd>
            {/each}
        </dl>
    {/if}
</div>
