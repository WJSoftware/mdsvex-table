import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import Children1Col from '$lib/tests/Children1Col.svelte';

describe(
    'Td',
    breakpointTests([
        {
            expectedTagName: 'td',
            renderAsText: 'a table data cell',
            locator: (page) => page.getByRole('cell'),
            children: Children1Col
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) => page.getByRole('cell'),
            children: Children1Col
        }
    ])
);
