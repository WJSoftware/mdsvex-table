<script lang="ts">
    import { TableContext } from '$lib/table-context.svelte.js';
    import { setMdTableContext } from './md-table-context.js';
    import type { LayoutProps } from './$types.js';
    import './app.css';
    import Navbar from './Navbar.svelte';
    import { EmptyContentContext, setEmptyContentContext } from './empty-content-context.svelte.js';

    let { children }: LayoutProps = $props();
    setEmptyContentContext(new EmptyContentContext());
    setMdTableContext(new TableContext());
</script>

<Navbar />
<div class="container">
    <main class="content m-5">
        {@render children()}
    </main>
</div>