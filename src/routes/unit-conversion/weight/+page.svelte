<script>
	import Tool from "$lib/components/tool.svelte";
	import SingleUnit from "../single-unit.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let from = "kilograms";
  let baseValue = 1;
</script>

<Tool>
  <TwoColumnView leftTitle="Metric units" rightTitle="Imperial units"> 
    <div slot="left">
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="microgram" name="Micrograms" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="milligrams" name="Miligrams" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="grams" name="Grams" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilograms" name="Kilograms" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="metric tons" name="Tons" />
    </div>

    <div slot="right">
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="oz" name="Ounces" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="lb" name="Pounds" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="st" name="Stone" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="short ton" name="Short/US ton" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="long ton" name="Long/imperial ton" />
    </div>
  </TwoColumnView>
</Tool>