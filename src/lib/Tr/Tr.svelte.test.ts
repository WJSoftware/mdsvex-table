import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import Children1Col from '$lib/tests/Children1Col.svelte';

describe(
    'Tr',
    breakpointTests([
        {
            expectedTagName: 'tr',
            renderAsText: 'a table row',
            locator: (page) => page.getByRole('row').all()[0],
            children: Children1Col
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) => page.getByRole('row').all()[0],
            children: Children1Col
        }
    ])
);
