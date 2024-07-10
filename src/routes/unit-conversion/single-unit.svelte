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
    console.log("On value changed ", parsedValue, from, to);
  }

  function onBaseValueChanged(baseValue) {
    const parsedBaseValue = parseFloat(baseValue);
    if (isNaN(parsedBaseValue)) {
      return "";
    }

    if (from === to) {
      return formatValue(parsedBaseValue);
    }

    return formatValue(convert(parsedBaseValue, from).to(to));
  }

  let convertedValue = 0;
  $: convertedValue = onBaseValueChanged(baseValue);
</script>

<InputField label={name}>
  <input type="number"
    value={convertedValue}
    on:input={onValueChanged} />   
</InputField>