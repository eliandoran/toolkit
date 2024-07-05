<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
  import Tool from "$lib/components/tool.svelte";

  function to(input) {
    const data = JSON.parse(input);
    return convertObjectToJsNotation(data);
  }

  function convertObjectToJsNotation(obj) {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      let entries = Object.entries(obj).map(([key, value]) => {
        return `${key}: ${convertObjectToJsNotation(value)}`;
      });
      return `{ ${entries.join(', ')} }`;
    } else if (Array.isArray(obj)) {
      let values = obj.map(value => convertObjectToJsNotation(value));
      return `[ ${values.join(', ')} ]`;
    } else if (typeof obj === 'string') {
      return `"${obj}"`;
    } else {
      return obj;
    }
  }

  function from(input) {

  }
</script>

<Tool>
  <SymmetricInputOutput
    fromTitle="JSON"
    toTitle="JS object"
    {to} {from} />
</Tool>