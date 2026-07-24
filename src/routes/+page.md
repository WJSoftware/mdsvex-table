---
  title: mdsvex-table
  description: |
    Full documentation for mdsvex-table, an NPM package for Svelte web applications that renders a responsive table out of tables generated with the popular mdsvex package and Markdown documents.
---

<script>
  import { Lightbulb, TriangleAlert } from '@lucide/svelte';
</script>

# {title}

This is a Svelte v5 NPM package that provides replacement Svelte components for building tables: `table`, `thead`, `tbody`, `tr`, `th` and `td`.  These are the ones that can be generated out of a Markdown table.  Replacements for `caption` and `tfooter` are not provided because table captions and footers cannot be specified in markup.

> **<Lightbulb /> Do you need captions or table footers?**
>
> [Place an issue](https://github.com/WJSoftware/mdsvex-table/issues/new) requesting them.  Please provide your use case for justification.

The components are designed to exchange the table markup with list markup (not `ul/ol`, but a list of containers) that can be read better in small devices.  In other words:  Transforms tables to vertical lists of card-like items.

## Features

- Fully automatic once the table context has been set
- Configurable breakpoint
- Configurable SSR default
- Reactive table context properties for more complex scenarios
- Can be fully styled
- The list version is still announced as a table by screen readers
- Empty content:  Rows with empty cells have that term/definition pair removed, unless custom empty content is specified

## How It Works

Since this is a component meant to replace Markdown-generated tables, it doesn't rely on component properties.  Instead, configuration and all interconnection between the various table components is done through context.

We also don't use the components directly under normal circumstances.  Instead, we configure a layout component in *MDsveX* and follow [their instructions](https://mdsvex.pngwn.io/docs#layout) on how to export all the table-related components.

We finally initialize the whole thing by creating the "root" table context that will apply to all tables in the Markdown document.

These would be the additions to the layout component:

```svelte
<script lang="ts" module>
    // export * ... doesn't work. 😢
    export {
        table,
        thead,
        tbody,
        tr,
        th,
        td
    } from 'mdsvex-table';
</script>
<script lang="ts">
    import { setTableContext, TableContext } from 'mdsvex-table';

    setTableContext(new TableContext({ /* options */ }));
</script>
```

## Options

| Option | Type | Default | Description |
| - | - | - | - |
| `breakpoint` | `string \| number \| (() => string)` | `576` | The breakpoint at which the list format kicks in.  If it is a number, it is assumed to be in pixels; if it is a string (such as `'25rem'`) then it is given as-is to the media query; if it is a function, it must return the entire media query. |
| `ssrBehavior` | `"list" \| "table"` | `'table'` | For Sveltekit and SSR-rendered implementations, it determines how the table will be rendered. |
| `emptyCellContent` | `string \| Snippet \| undefined` | `undefined` | Sets content to be displayed on empty cells.  If left undefined, then the term/definition pair for that cell is removed from markup. |

## Styling

For the table, continue styling it the way you've been doing it.

For the list version, this is how it can be styled:

```css
[data-mdsvex-table="table"] {
  /* styles */
}

[data-mdsvex-table="tbody"] {
  /* styles */
}

[data-mdsvex-table="tr"] {
  /* styles */
}

[data-mdsvex-table="th"] {
  /* styles */
}

[data-mdsvex-table="td"] {
  /* styles */
}
```

Yes, there's also an element that can be targeted with `[data-mdsvex-table="thead"]`, but said element is invisible.  It exists only for screen readers, so don't mess with it.

## Development Tips

To improve SSR guessing, 2 easy methods come to mind:

1. Examine the *User Agent* string and determine if the requestor is using a mobile device.
2. Save and send a cookie with the user's `window.innerWidth` value.  Then SSR can be 100% accurate after one visit to your web application.

For #1 above, ask an AI and you shall receive recommendations:

| Package | Features | Use Case |
| --- | --- | --- |
| **ua-parser-js** | Widely used, lightweight (~17KB minified). Parses browser, OS, device, CPU, and engine. Works in Node.js when you pass ``req.headers['user-agent']``. | General-purpose parsing with broad ecosystem support. |
| **ua-parser-modern** | TypeScript-native, modular functions (``parseBrowser``, ``parseOS``, etc.). Compatible with modern bundlers (Vite, Rollup, esbuild). Handles tricky cases like Brave spoofing Chrome. | Ideal for TypeScript projects or modern toolchains. |
| **browser-dtector** | Simple API, supports both Node.js and browser. Returns parsed info including platform, version, and flags (``isMobile``, ``isDesktop``, etc.). | Quick detection with minimal setup, good for middleware. |

> **<TriangleAlert /> Recommendations Not Sanitized**
>
> The recommendations were copied directly from the AI response without verification, so verify them yourself and maybe [tell us about it](https://github.com/WJSoftware/mdsvex-table/discussions) if you like or feel the need.

As for #2, remember to use [`<svelte:window>`](https://svelte.dev/docs/svelte/svelte-window) to keep the cookie reactively up-to-date.
