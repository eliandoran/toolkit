<script>
	import Card from "$lib/components/card.svelte";
	import StackView from "$lib/components/stack-view.svelte";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

    let from = "liters";
    let baseValue = 1;
</script>

<Tool>    
    <TwoColumnView leftTitle="Metric units" hasRightPadding={false}> 
      <div slot="left">
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="microliters" name="Microliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="milliliters" name="Milliliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="liters" name="Liters / Cubic decimeter" />          
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kiloliters" name="Cubic meter / Kiloliters" />
      </div>
  
      <div slot="right">
        <StackView title="Imperial Units">
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="cubic inch" name="Cubic inch" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="pint" name="Pint" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gallon" name="Gallon" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="cubic foot" name="Cubic feet" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="imperial pint" name="Pint" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="imperial fluid ounce" name="Imperial fluid ounces" />
        </StackView>

        <StackView title="United States customary units (Fluid volumes)">
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="teaspoons" name="Teaspoon" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="tablespoons" name="Tablespoon" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US fluid ounce" name="US fluid ounce" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US legal cup" name="US cup (liquid)" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid pint" name="US pint (liquid)" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid quart" name="US quart (liquid)" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid gallon" name="US gallon (liquid)" />
        </StackView>
      </div>
    </TwoColumnView>
  </Tool>