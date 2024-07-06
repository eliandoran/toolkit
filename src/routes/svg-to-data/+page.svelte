<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
  import Tool from "$lib/components/tool.svelte";
  import toUri from "mini-svg-data-uri";

  function to(svg) {
    return toUri(svg);
  }

  function from(dataUri) {
  }
</script>

<Tool>
  <SymmetricInputOutput
    fromTitle="SVG"
    toTitle="Data URI"
    {to} {from} />
</Tool>