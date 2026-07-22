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
    breakpoint: number | string | (() => string);
    
    constructor(options?: TableContextOptions) {
        const { breakpoint, ssrBehavior = 'table' } = {
            ...defaultContextOptions,
            ...options
        };
        this.breakpoint = $state(breakpoint);
        const ssr = ssrBehavior === 'list' ? true : false;
        this.mq = $derived.by(() => {
            const bp = typeof this.breakpoint === 'number' ?
                this.breakpoint + 'px' :
                typeof this.breakpoint === 'string' ? this.breakpoint
                    : undefined;
            const query = typeof this.breakpoint === 'function' ? this.breakpoint() : `(max-width: ${bp})`;
            return new MediaQuery(query, ssr);
        });
    }
}

export const [tableContext, setTableContext] = createContext<TableContext>();
