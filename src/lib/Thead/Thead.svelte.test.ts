import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import Children1Col from '$lib/tests/Children1Col.svelte';

describe(
    'Thead',
    breakpointTests([
        {
            expectedTagName: 'thead',
            renderAsText: 'a header row group',
            locator: (page) =>
                page.getByRole('rowgroup').all().find(locator => { 
                    return locator.element().tagName.toLowerCase() === 'thead';
                })!,
            children: Children1Col
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) =>
                page.getByRole('rowgroup').all().find(locator => { 
                    const el = locator.element();
                    return el.tagName.toLowerCase() === 'div' && el.getAttribute('data-mdsvex-table') === 'thead';
                })!,
            children: Children1Col
        }
    ])
);
