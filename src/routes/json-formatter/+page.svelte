<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";

    function to(input) {
        return JSON.stringify(JSON.parse(input), null, 4);
    }

    function from(input) {
        return JSON.stringify(JSON.parse(input));
    }
</script>

<SymmetricInputOutput
    fromTitle="Unformatted/Minified JSON"
    toTitle="Formatted JSON"
    {to} {from}
/>