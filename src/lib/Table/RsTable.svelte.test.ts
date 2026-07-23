import { describe, test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import type { TableContextOptions } from '$lib/types.js';
import Layout from '$lib/tests/Layout.svelte';
import { children1Col } from '$lib/tests/TestSnippets.svelte';
import type { TableContext } from '$lib/table-context.svelte.js';

describe('RsTable', () => {
    const ctxOptions: TableContextOptions = {
        breakpoint: window.innerWidth,
    };
    test('Should render the root div with the expected attributes.', async () => {
        render(Layout, { props: { ctxOptions } });
        const tableLocator = page.getByRole('table');
        await expect.element(tableLocator).toBeInTheDocument();
        const table = await tableLocator.element();
        expect(table).toHaveAttribute('data-mdsvex-table', 'table');
    });
    test('Should add the aria-rowcount attribute with the correct number of rows.', async () => {
        let tableCtx: TableContext;
        render(Layout, {
            props: {
                ctxOptions,
                children: children1Col,
                get tableCtx() {
                    return tableCtx!;
                },
                set tableCtx(ctx: TableContext) {
                    tableCtx = ctx;
                },
            },
        });
        const tableLocator = page.getByRole('table');
        await expect.element(tableLocator).toBeInTheDocument();
        const table = await tableLocator.element();
        expect(table).toHaveAttribute('aria-rowcount', '1');
        expect(tableCtx!.body?.rows.length).toBe(1);
    });
});
