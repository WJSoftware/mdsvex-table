# mdsvex-table

> Table component for `mdsvex` Markdown tables that responsively switches to list format on small screens.

## Quickstart

1. Install:
    ```bash
    npm install mdsvex-table
    ```
2. If you don't have an MDSvex layout component configured, add one:
    ```ts
        preprocess: [mdsvex({
            extensions: ['.svx', '.md'],
            layout: join(__dirname, './src/routes/MdLayout.svelte') // Or whatever you wish
        })],
    ```
3. Re-export all table components from `mdsvex-table` in the layout(s) component(s) as per MDSvex's instructions:
    ```svelte
    <script lang="ts" module>
        // export * ... doesn't work. :-(
        export {
            table,
            thead,
            tbody,
            tr,
            th,
            td
        } from 'mdsvex-table'
    </script>
    ```
4. Still in the layout, create the table context:
    ```svelte
    <script lang="ts">
        import { setTableContext, TableContext } from 'mdsvex-table';

        setTableContext(new TableContext({ /* options */ }));
    </script>
    ```
5. Style the list version of the tables (see documentation).

[Full Documentation & Demo](https://wjsoftware.github.io/mdsvex-table)
