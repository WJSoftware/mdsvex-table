<script lang="ts">
    import type { Snippet } from 'svelte';
    import Cell from '$lib/Cell/Cell.svelte';

    type Props = {
        children?: Snippet;
    }

    let { children }: Props = $props();
</script>

<Cell {children} />
