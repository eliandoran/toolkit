<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";

    function to(input) {
        return btoa(input);
    }

    function from(input) {
        return atob(input);
    }
</script>

<SymmetricInputOutput
    fromTitle="Encode to Base64"
    toTitle="Decode from Base64"
    {to} {from}  
/>