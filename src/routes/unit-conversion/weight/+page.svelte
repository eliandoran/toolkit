<script>
	import Tool from "$lib/components/tool.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

  let from = "kilograms";
  let baseValue = 1;
</script>

<Tool>
  <OneColumnView title="Weight Conversion">
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="microgram" name="Micrograms" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="milligrams" name="Miligrams" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="grams" name="Grams" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilograms" name="Kilograms" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="metric tons" name="Tons" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="oz" name="Ounces" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="lb" name="Pounds" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="st" name="Stone" />
  </OneColumnView>
</Tool>