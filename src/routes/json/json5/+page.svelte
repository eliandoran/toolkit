<script>
  import { json } from "@codemirror/lang-json";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
  import Tool from "$lib/components/tool.svelte";
  import JSON5 from "json5";

  function to(input) {
    return JSON5.stringify(JSON.parse(input), null, 2);
  }

  function from(input) {
    return JSON.stringify(JSON5.parse(input), null, 2);
  }
</script>

<Tool>
  <SymmetricInputOutput
    fromTitle="JSON"
    toTitle="JSON5"
    useCodeMirror
    leftLang={json()}
    {to} {from} />
</Tool>