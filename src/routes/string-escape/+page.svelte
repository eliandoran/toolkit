<script>
    import { addSlashes, removeSlashes } from "slashes";

	import Tool from "$lib/components/tool.svelte";
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";

    function to(text) {
        return addSlashes(text);
    }

    function from(text) {
        return removeSlashes(text);
    }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="Original text"
        toTitle="Text escaped with backslashes"
        {to} {from} />
</Tool>