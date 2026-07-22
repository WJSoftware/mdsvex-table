import { describe, test, expect } from 'vitest';

describe('index', () => {
    test("Should export exactly the expected list of objects.", async () => { 
        const expectedObjects = [
            'TableContext',
            'setTableContext',
            'table',
            'thead',
            'tbody',
            'tr',
            'th',
            'td'
        ];
        const indexModule = await import('./index.js');
        const exportedObjects = Object.keys(indexModule);
        expect(exportedObjects).toEqual(expect.arrayContaining(expectedObjects));
        expect(expectedObjects).toEqual(expect.arrayContaining(exportedObjects));
    });
});
