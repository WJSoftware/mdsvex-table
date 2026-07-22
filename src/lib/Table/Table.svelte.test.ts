import { describe } from 'vitest';
import { breakpointTests } from '$lib/tests/breakpoint-tests.js';

describe('Table', breakpointTests([
    {
        renderAsText: 'a table',
        locator: (page) => page.getByRole('table'),
        expectedTagName: 'table',
    },
    {
        renderAsText: 'a div',
        locator: (page) => page.getByRole('table'),
        expectedTagName: 'div',
    },
]));
