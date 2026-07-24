<script lang="ts" module>
    import Children1Col from "$lib/tests/Children1Col.svelte";
    import ChildrenEmptyCell from "$lib/tests/ChildrenEmptyCell.svelte";

    export { children1Col, childrenEmptyCell, emptyContent };
</script>

{#snippet children1Col()}
    <Children1Col />
{/snippet}

{#snippet childrenEmptyCell()}
    <ChildrenEmptyCell />
{/snippet}

{#snippet emptyContent()}
    <span>(empty)</span>
{/snippet}
