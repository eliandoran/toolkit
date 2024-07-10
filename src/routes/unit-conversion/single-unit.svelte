<script>
  import convert from "convert";
	
  import InputField from "$lib/components/input-field.svelte";

  export let from;
  export let to;
  export let baseValue;
  export let name;

  function onValueChanged(e) {
    const value = parseInt(e.target.value, 10); 
    baseValue = convert(value, to).to(from);
  }

  let convertedValue = 0;
  $: convertedValue = convert(baseValue, from).to(to);
</script>

<InputField label={name}>
  <input type="number"
    value={convertedValue}
    on:input={onValueChanged} />   
</InputField>