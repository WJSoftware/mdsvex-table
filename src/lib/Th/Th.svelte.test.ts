import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import { children1Col } from '$lib/tests/TestSnippets.svelte';

describe(
    'Th',
    breakpointTests([
        {
            expectedTagName: 'th',
            renderAsText: 'a table header cell',
            locator: (page) => page.getByRole('columnheader'),
            children: children1Col,
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) => page.getByRole('columnheader'),
            children: children1Col,
        },
    ]),
);
