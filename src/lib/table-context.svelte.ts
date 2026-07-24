import { createContext, type Snippet } from 'svelte';
import type { TableContextOptions } from './types.js';
import { MediaQuery } from 'svelte/reactivity';
import type { ContainerContext } from './container-context.svelte.js';

const defaultContextOptions: Required<TableContextOptions> = {
    breakpoint: 576,
    ssrBehavior: 'table',
    // @ts-expect-error TS2322 until a Required<> helper type that respects exactOptionalPropertyTypes
    emptyCellContent: undefined
};

export class TableContext {
    mq: MediaQuery;
    header: ContainerContext | undefined;
    body: ContainerContext | undefined;
    breakpoint: number | string | (() => string);
    emptyCellContent: string | Snippet | undefined;
    
    constructor(options?: TableContextOptions) {
        const { breakpoint, ssrBehavior, emptyCellContent } = {
            ...defaultContextOptions,
            ...options
        };
        this.breakpoint = $state(breakpoint);
        this.emptyCellContent = $state(emptyCellContent);
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
