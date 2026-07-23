import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';
import { children1Col } from '$lib/tests/TestSnippets.svelte';

describe(
    'Td',
    breakpointTests([
        {
            expectedTagName: 'td',
            renderAsText: 'a table data cell',
            locator: (page) => page.getByRole('cell'),
            children: children1Col,
        },
        {
            expectedTagName: 'div',
            renderAsText: 'a div',
            locator: (page) => page.getByRole('cell'),
            children: children1Col,
        },
    ]),
);
