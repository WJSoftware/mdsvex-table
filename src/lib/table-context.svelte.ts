import { createContext } from 'svelte';
import type { TableContextOptions } from './types.js';
import { MediaQuery } from 'svelte/reactivity';
import type { ContainerContext } from './container-context.svelte.js';

const defaultContextOptions: Required<TableContextOptions> = {
    breakpoint: 576,
    ssrBehavior: 'table'
};

export class TableContext {
    mq: MediaQuery;
    header: ContainerContext | undefined;
    body: ContainerContext | undefined;
    constructor(options?: TableContextOptions) {
        const { breakpoint, ssrBehavior = 'table' } = {
            ...defaultContextOptions,
            ...options
        };
        const ssr = ssrBehavior === 'list' ? true : false;
        this.mq = $derived.by(() => {
            const bp = typeof breakpoint === 'number' ?
                breakpoint + 'px' :
                typeof breakpoint === 'string' ? breakpoint
                    : undefined;
            const query = typeof breakpoint === 'function' ? breakpoint() : `(max-width: ${bp})`;
            return new MediaQuery(query, ssr);
        });
    }
}

export const [tableContext, setTableContext] = createContext<TableContext>();
