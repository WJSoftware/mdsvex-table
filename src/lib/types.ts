import type { Snippet } from "svelte";

export type TableContextOptions = {
    /**
     * Breakpoint for the media query used to determine how the table will be rendered.  It can be:
     * 
     * - A number (in pixels)
     * - A string (e.g. '768px', '48em', etc.)
     * - A function that returns a string.  The returned string is the CSS media query to use.
     * 
     * **NOTE:**  The default media query is `(max-width: 576px)`, which is the Bootstrap breakpoint for small devices.
     * @default 576
     */
    breakpoint?: number | string | (() => string) | undefined;
    /**
     * The behavior of the table when rendered on the server.  It can be:
     * 
     * - 'table': The table will be rendered as a table on the server.
     * - 'list': The table will be rendered as a list on the server.
     * 
     * **NOTE:**  This may cause flickering if the client's screen size differs from the expectation set for SSR.
     * @default 'table'
     */
    ssrBehavior?: 'table' | 'list' | undefined;
    /**
     * The content to display in empty cells.  It can be:
     * 
     * - A string (e.g. 'N/A', '-', etc.)
     * - A Svelte snippet
     * 
     * If not set, empty cells and their corresponding headers will be skipped at render time.
     */
    emptyCellContent?: string | Snippet | undefined;
}
