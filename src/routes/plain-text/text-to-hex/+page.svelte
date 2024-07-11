<script>
  import { Buffer } from "buffer";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";

  function to(input) {
    return Buffer
      .from(input)
      .toString("hex");
  }

  function from(input) {
    
  }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="Plain Text"
        toTitle="Hex"
        {to} {from} />
</Tool>