<script>
    import { encode, decode } from "xmorse";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
    import Tool from "$lib/components/tool.svelte";

    const config = {
        space: " "
    };

    function to(input) {
        return input
            .split("\n")
            .map((line) => encode(line, config))
            .join("\n");
    }

    function from(input) {
        return input
            .split("\n")
            .map((line) => decode(line, config))
            .join("\n");
    }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="Plain text"
        toTitle="Morse code"
        {to} {from} />
</Tool>