import { describe, test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import type { TableContextOptions } from '$lib/types.js';
import Layout from '$lib/tests/Layout.svelte';
import { children1Col, childrenEmptyCell, emptyContent } from '$lib/tests/TestSnippets.svelte';

describe('RsTr', () => {
    test('Should render data rows as lists.', async () => {
        const ctxOptions: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                ctxOptions,
                children: children1Col,
            },
        });
        await expect.element(page.getByRole('list')).toBeInTheDocument();
    });
    test('Should render header content as list items.', async () => {
        const ctxOptions: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                ctxOptions,
                children: children1Col,
            },
        });
        const el = page.getByRole('listitem').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.textContent).toBe('Header 1');
    });
    test("Should render data content inside the element of role 'cell'.", async () => {
        const ctxOptions: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                ctxOptions,
                children: children1Col,
            },
        });
        const el = page.getByRole('cell').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.textContent).toBe('Cell 1');
    });
    test("Should render the element of role 'cell' with the expected attributes.", async () => {
        const ctxOptions: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                ctxOptions,
                children: children1Col,
            },
        });
        const el = page.getByRole('cell').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.getAttribute('data-mdsvex-table')).toBe('td');
        expect(el.getAttribute('aria-rowindex')).toBe('1');
        expect(el.getAttribute('aria-colindex')).toBe('1');
    });
    describe('Empty cell content', () => {
        test('Should not render the term element for empty cells.', async () => {
            const ctxOptions: TableContextOptions = {
                breakpoint: window.innerWidth,
            };
            render(Layout, {
                props: {
                    ctxOptions,
                    children: childrenEmptyCell,
                },
            });
            const els = page.getByRole('cell').all();
            expect(els).toHaveLength(1);
            await expect.element(els[0]).toBeInTheDocument();
        });
        test.each([
            {
                emptyCellContent: '(empty)',
                contentType: 'string',
            },
            {
                emptyCellContent: emptyContent,
                contentType: 'snippet',
            }
        ])('#7: Should render the $contentType empty content on empty cells.', async ({ emptyCellContent }) => {
            const ctxOptions: TableContextOptions = {
                breakpoint: window.innerWidth,
                emptyCellContent,
            };
            await render(Layout, {
                props: {
                    ctxOptions,
                    children: childrenEmptyCell,
                },
            });
            const els = page.getByRole('cell').all();
            expect(els).toHaveLength(2);
            await expect.element(els[0]).toBeInTheDocument();
            expect(els[0].element().attributes.getNamedItem('data-mdsvex-table')?.value).toBe('td');
            expect(els[0].element().textContent).toBe('(empty)');
            await expect.element(els[1]).toBeInTheDocument();
            expect(els[1].element().textContent).toBe('Cell 2');
        });
    });
});
