<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";
    import { encode, decode } from "he";

    function to(input) {
        return encode(input, {
            useNamedReferences: true
        });
    }

    function from(input) {
        return decode(input);
    }

</script>

<Tool title="HTML Entity Encode/Decode">
    <SymmetricInputOutput
        fromTitle="Decoded text"
        toTitle="Encoded text"
        {to} {from} />
</Tool>