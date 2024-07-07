<script>
	import { json } from "@codemirror/lang-json";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";
	import papaparse from "papaparse";

	function to(input) {
		const parsed = JSON.parse(input);
		return papaparse.unparse(parsed);
	}
	
	function from(input) {
		const result = papaparse.parse(input);
		return JSON.stringify(result.data, null, 4);
	}
</script>

<Tool>
		<SymmetricInputOutput
			fromTitle="JSON"
			toTitle="CSV"
			useCodeMirror
			leftLang={json()}
			{to} {from} />
</Tool>