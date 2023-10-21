<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
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

<SymmetricInputOutput
    fromTitle="Unescaped HTML"
    toTitle="Escaped HTML"
    {to} {from} />