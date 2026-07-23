<script lang="ts">
    import type { LayoutProps } from './$types.js';
    import './app.css';
    import Navbar from './Navbar.svelte';

    let { children }: LayoutProps = $props();
</script>

<Navbar />
<div class="container">
    <main class="content m-5">
        {@render children()}
    </main>
</div>