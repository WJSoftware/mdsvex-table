<script lang="ts">
    import type { LayoutProps } from './$types';
    import './app.css';

    let { data, children }: LayoutProps = $props();
</script>

<main class="content m-5">
    {@render children()}
</main>