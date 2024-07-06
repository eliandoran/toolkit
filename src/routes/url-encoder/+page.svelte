<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";

    function to(input) {
        return encodeURI(input);
    }

    function from(input) {
        return decodeURI(input);
    }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="URL Encode"
        toTitle="URL Decode"
        {to} {from} />
</Tool>