<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";
    import he from "he";

    function to(input) {
        return he.encode(input, {
            useNamedReferences: true
        });
    }

    function from(input) {
        return he.decode(input);
    }

</script>

<Tool title="HTML Entity Encode/Decode">
    <SymmetricInputOutput
        fromTitle="Original text"
        toTitle="Encoded text"
        {to} {from} />
</Tool>