<script>
	import SymmetricInputOutput from "$lib/components/symmetric-input-output.svelte";
  import Tool from "$lib/components/tool.svelte";

  function to(input) {
    const data = JSON.parse(input);
    return convertObjectToJsNotation(data, 0);
  }

  function convertObjectToJsNotation(obj, indentLevel) {
    const indentUnit = "  ";
    let indent = indentUnit.repeat(indentLevel);
    
    // Array
    if (Array.isArray(obj)) {
      let lines = [];
      lines.push(`[`);
      for (const value of obj) {
        lines.push(`${indent + indentUnit}${convertObjectToJsNotation(value, indentLevel+1)},`);
      }
      lines.push(`${indent}]`);
      return lines.join("\n");
    }

    // Object
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      let lines = [];
      lines.push("{");
      for (const [ key, value ] of Object.entries(obj)) {
        lines.push(`${indent + indentUnit}${key}: ${convertObjectToJsNotation(value, indentLevel+1)},`);
      }
      lines.push(`${indent}}`);
      return lines.join("\n");
    }
    
    // Strings
    if (typeof obj === "string") {
      return `"${obj}"`;
    }

    // Everything else
    return obj;
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