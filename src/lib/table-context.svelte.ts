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

/**
 * Class that collects and maintains reactive configuration options for Markdown-rendered tables.
 */
export class TableContext {
    /**
     * The media query used to determine how the table will be rendered.
     */
    mq: MediaQuery;
    /**
     * The container context for the table header.
     */
    header: ContainerContext | undefined;
    /**
     * The container context for the table body.
     */
    body: ContainerContext | undefined;
    /**
     * The breakpoint at which the table will switch between table and list rendering.
     * 
     * - If a number is provided, it will be treated as a pixel value.
     * - If a string is provided, it will be treated as a CSS length value.
     * - If a function is provided, it must return the entire media query string.
     */
    breakpoint: number | string | (() => string);
    /**
     * The content to display in empty table cells. This can be a string or a Svelte snippet.  If left undefined,
     * then the term/definition pair will be omitted from the rendered table.
     */
    emptyCellContent: string | Snippet | undefined;
    /**
     * Initializes a new instance of this class.
     * @param options Initial set of values for the table context.
     */
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
