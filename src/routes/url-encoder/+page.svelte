<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";

    function to(input) {
        return encodeURI(input);
    }

    function from(input) {
        return decodeURI(input);
    }
</script>

<SymmetricInputOutput
    fromTitle="URL Encode"
    toTitle="URL Decode"
    {to} {from} />