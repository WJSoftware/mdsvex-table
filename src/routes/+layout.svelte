<script lang="ts">
    import type { LayoutProps } from './$types.js';
    import './app.css';
    import Navbar from './Navbar.svelte';

    type Props = LayoutProps & {
        title?: string;
        description?: string;
    }

    let { title, description, children }: Props = $props();
</script>

<svelte:head>
    <title>{title || 'mdsvex-table'}</title>
    <meta name="description" content={description || 'mdsvex-table'} />
</svelte:head>

<Navbar />
<div class="container">
    <main class="content m-5">
        {@render children()}
    </main>
</div>