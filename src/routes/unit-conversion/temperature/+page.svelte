<script>
	import Tool from "$lib/components/tool.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

  let from = "celsius";
  let baseValue = 30;
</script>

<Tool>
  <OneColumnView title="Temperature Conversion">
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="celsius" name="Degrees Celsius (°C)" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="fahrenheit" name="Degrees Fahrenheit (°F)" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kelvin" name="Kelvin" />
  </OneColumnView>
</Tool>