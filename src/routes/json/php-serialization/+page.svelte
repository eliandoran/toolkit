<script>
    import { json } from "@codemirror/lang-json";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
    import Tool from "$lib/components/tool.svelte";
    import { serialize, unserialize } from "php-serialize";

    function to(input) {
        return serialize(JSON.parse(input));
    }

    function from(input) {
        return JSON.stringify(unserialize(input));
    }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="JSON"
        toTitle="PHP Serialized Format"
        useCodeMirror wordWrap
        leftLang={json()}
        {to} {from} />
</Tool>