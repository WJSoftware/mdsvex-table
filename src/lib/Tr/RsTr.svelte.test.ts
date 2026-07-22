import { describe, test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import type { TableContextOptions } from '$lib/types.js';
import Layout from '$lib/tests/Layout.svelte';
import Children1Col from '$lib/tests/Children1Col.svelte';

describe('RsTr', () => {
    test("Should render data rows as lists.", async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
                children: Children1Col,
            }
        });
        await expect.element(page.getByRole('list')).toBeInTheDocument();
    });
    test("Should render header content as list items.", async () => {
        const optionsCtx: TableContextOptions = {
            breakpoint: window.innerWidth,
        };
        render(Layout, {
            props: {
                optionsCtx,
                children: Children1Col,
            }
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
                children: Children1Col,
            }
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
                children: Children1Col,
            }
        });
        const el = page.getByRole('cell').element();
        await expect.element(el).toBeInTheDocument();
        expect(el.getAttribute('data-mdsvex-table')).toBe('td');
        expect(el.getAttribute('aria-rowindex')).toBe('1');
        expect(el.getAttribute('aria-colindex')).toBe('1');
    });
});
