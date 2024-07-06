<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
  import Tool from "$lib/components/tool.svelte";

  function to(svg) {
  
  }

  function from(dataUri) {

  }
</script>

<Tool title="SVG to Data URL">
  <SymmetricInputOutput
    fromTitle="SVG"
    toTitle="Data URI"
    {to} {from} />
</Tool>