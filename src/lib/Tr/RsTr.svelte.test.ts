import { describe, test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import type { TableContextOptions } from '$lib/types.js';
import Layout from '$lib/tests/Layout.svelte';
// @ts-expect-error TS2614
import { children1Col, childrenEmptyCell, emptyContent } from '$lib/tests/TestSnippets.svelte';
import { flushSync } from 'svelte';

describe('RsTr', () => {
    test('Should render data rows as lists.', async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
                children: children1Col,
            },
        });
        await expect.element(page.getByRole('list')).toBeInTheDocument();
    });
    test('Should render header content as list items.', async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
                children: children1Col,
            },
        });
        const el = page.getByRole('listitem').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.textContent).toBe('Header 1');
    });
    test("Should render data content inside the element of role 'cell'.", async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
                children: children1Col,
            },
        });
        const el = page.getByRole('cell').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.textContent).toBe('Cell 1');
    });
    test("Should render the element of role 'cell' with the expected attributes.", async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
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
            const optionsCtx: TableContextOptions = {
                breakpoint: window.innerWidth,
            };
            render(Layout, {
                props: {
                    optionsCtx,
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
            let tableCtx: TableContextOptions | undefined;
            await render(Layout, {
                props: {
                    children: childrenEmptyCell,
                    get tableCtx() { 
                        return tableCtx;
                    },
                    set tableCtx(value) {
                        tableCtx = value;
                    }
                },
            });
            /*
            There's something different in the test environment than real browsers:  If I pass optionsCtx to initialize 
            the context with non-default values, the TestContext constructor doesn't receive the optionsCtx object I
            assign via the options.props property of the render() function.  It claims that "options" is undefined.

            The weird thing is that all other tests work fine with the optionsCtx object passed to the render() 
            function.  I don't know why this test is different, but I can work around it by setting the context values
            after the render() function is called.
            */
            tableCtx!.breakpoint = window.innerWidth;
            tableCtx!.emptyCellContent = emptyCellContent;
            flushSync();
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
