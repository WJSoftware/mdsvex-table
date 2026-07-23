<script lang="ts">
    import Tbody from "$lib/Tbody/Tbody.svelte";
    import Td from "$lib/Td/Td.svelte";
    import Th from "$lib/Th/Th.svelte";
    import Thead from "$lib/Thead/Thead.svelte";
    import Tr from "$lib/Tr/Tr.svelte";
</script>
<Thead>
    <Tr>
        <Th>Header 1</Th>
        <Th>Header 2</Th>
    </Tr>
</Thead>
<Tbody>
    <Tr>
        <Td></Td>
        <Td>Cell 2</Td>
    </Tr>
</Tbody>
