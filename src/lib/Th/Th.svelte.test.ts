import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import Children1Col from '$lib/tests/Children1Col.svelte';

describe(
    'Th',
    breakpointTests([
        {
            expectedTagName: 'th',
            renderAsText: 'a table header cell',
            locator: (page) => page.getByRole('columnheader'),
            children: Children1Col
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) => page.getByRole('columnheader'),
            children: Children1Col
        }
    ])
);
