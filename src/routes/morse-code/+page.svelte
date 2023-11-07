<script>
    import { encode, decode } from "xmorse";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
    import Tool from "$lib/components/tool.svelte";

    const config = {
        space: " "
    };

    function to(input) {
        return encode(input, config);
    }

    function from(input) {
        return decode(input, config);
    }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="Plain text"
        toTitle="Morse code"
        {to} {from} />
</Tool>