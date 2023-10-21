<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
    import YAML from "yaml";

    function to(input) {
        const data = JSON.parse(input);
        return YAML.stringify(data);
    }

    function from(input) {
        const data = YAML.parse(input);
        return JSON.stringify(data, null, 4);
    }
</script>

<SymmetricInputOutput
    fromTitle="JSON"
    toTitle="YAML"
    {to} {from} />