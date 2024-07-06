<script>
    import { json } from "@codemirror/lang-json";
    import { yaml } from "@codemirror/lang-yaml";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";
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

<Tool>
    <SymmetricInputOutput
        fromTitle="JSON"
        toTitle="YAML"
        useCodeMirror={true}
        leftLang={json()}
        rightLang={yaml()}
        {to} {from} />
</Tool>