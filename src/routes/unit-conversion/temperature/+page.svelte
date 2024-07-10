<script>
	import Tool from "$lib/components/tool.svelte";
	import InputField from "$lib/components/input-field.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

  const from = "celsius";
  let baseValue = 30;
</script>

<Tool>
  <OneColumnView title="Temperature Conversion">
    <InputField label="Degrees Celsius">
      <input type="number" bind:value={baseValue} />   
    </InputField>

    <SingleUnit {baseValue} {from} to="fahrenheit" name="Degrees Fahrenheit" />
    <SingleUnit {baseValue} {from} to="kelvin" name="Degrees Kelvin" />
  </OneColumnView>
</Tool>