<script>
  import { Buffer } from "buffer";

	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
	import Tool from "$lib/components/tool.svelte";

  function to(input) {
    const data = Array.from(Buffer.from(input));
    return data.map((byte) => byte
      .toString(16)
      .padStart(2, '0'))
      .join(" ");
  }

  function from(input) {
    return Buffer.from(input.replace(/ /g, ""), "hex");
  }
</script>

<Tool>
    <SymmetricInputOutput
        fromTitle="Plain Text"
        toTitle="Hex"
        {to} {from} />
</Tool>