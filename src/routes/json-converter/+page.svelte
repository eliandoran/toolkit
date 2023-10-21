<script>
    import { json } from "@codemirror/lang-json";

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

<Tool title="JSON<->YAML converter">
    <SymmetricInputOutput
        fromTitle="JSON"
        toTitle="YAML"
        useCodeMirror={true}
        leftLang={json()}
        {to} {from} />

    <span slot="footer">
        Uses the <a href="https://www.npmjs.com/package/yaml">yaml</a> library.
    </span>
</Tool>