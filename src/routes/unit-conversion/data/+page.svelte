<script>
	import Tool from "$lib/components/tool.svelte";
	import SingleUnit from "../single-unit.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let from = "gibibytes";
  let baseValue = 1;
</script>

<Tool>
  <TwoColumnView leftTitle="Bi-bytes (common)" rightTitle="Data rates (bi-bits, common)">
    <div slot="left">
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="bytes" name="Bytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kibibytes" name="Kibibytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="mebibytes" name="Mebibytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gibibytes" name="Gibibytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="tebibytes" name="Tebibytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="pebibytes" name="Pebibytes" />
    </div>

    <div slot="right">
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="bits" name="Bits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kibibits" name="Kibibits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="mebibits" name="Mebibits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gibibits" name="Gibibits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="tebibits" name="Tebibits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="pebibits" name="Pebibits" />      
    </div>
  </TwoColumnView>

  <TwoColumnView leftTitle="International System of Units" rightTitle="Data rates (bits, International System of Units)">
    <div slot="left">
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="bytes" name="Bytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilobytes" name="Kilobytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="megabytes" name="Megabytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gigabytes" name="Gigabytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="terabytes" name="Terabytes" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="petabytes" name="Petabytes" />
    </div>

    <div slot="right">
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="bits" name="Bits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilobits" name="Kilobits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="megabits" name="Megabits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gigabits" name="Gigabits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="terabits" name="Terabits" />
      <SingleUnit bind:baseValue={baseValue} bind:from={from} to="petabits" name="Petabits" />
    </div>
  </TwoColumnView>
</Tool>