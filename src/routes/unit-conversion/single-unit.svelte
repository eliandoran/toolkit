<script>
  import convert from "convert";
	
  import InputField from "$lib/components/input-field.svelte";

  export let from;
  export let to;
  export let baseValue;
  export let name;

  function formatValue(value) {
    return value.toFixed(2);
  }

  function onValueChanged(e) {
    const parsedValue = parseFloat(e.target.value);
    baseValue = formatValue(convert(parsedValue, to).to(from));
  }

  let convertedValue = 0;

  $: {
    if (!isNaN(baseValue)) {
      const parsedBaseValue = parseFloat(baseValue);
      convertedValue = formatValue(convert(parsedBaseValue, from).to(to));
    } else {
      convertedValue = "";
    }
  }
</script>

<InputField label={name}>
  <input type="number"
    value={convertedValue}
    on:input={onValueChanged} />   
</InputField>