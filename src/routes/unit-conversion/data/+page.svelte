<script>
	import Tool from "$lib/components/tool.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

  let from = "gibibytes";
  let baseValue = 1;
</script>

<Tool>
  <OneColumnView title="Data Conversion">
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="bytes" name="Bytes" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kibibytes" name="Kibibytes" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="mebibytes" name="Mebibytes" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gibibytes" name="Gibibytes" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="tebibytes" name="Tebibytes" />
    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="pebibytes" name="Pebibytes" />
  </OneColumnView>
</Tool>