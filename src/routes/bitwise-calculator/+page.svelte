<script>
    import Tool from "$lib/components/tool.svelte";

    import CommonOperations from "./common-operations.svelte";
	import ShiftOperations from "./shift-operations.svelte";
</script>

<Tool>
    <CommonOperations />
    <ShiftOperations />
</Tool>

<style>
    :global(.binary-input) {
        width: 100%;
        text-align: right;
        font-family: var(--font-monospace);
        font-size: 1.25em;
        border-radius: 6px;
        padding: 6px;
    }
</style>