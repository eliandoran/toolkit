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
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="centiliters" name="Centiliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="deciliters" name="Deciliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="liters" name="Liters / Cubic decimeter" />          
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="decaliters" name="Decaliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="hectoliters" name="Hectoliters" />
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

        <StackView title="United States customary units (Fluid volumes)" hasPadding={false}>
            <TwoColumnView leftTitle="Fluid" rightTitle="Dry" isCompact>
                <div slot="left">
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="teaspoons" name="Teaspoon" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="tablespoons" name="Tablespoon" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US fluid ounce" name="US fluid ounce" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US legal cup" name="US cup (liquid)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid pint" name="US pint (liquid)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid quart" name="US quart (liquid)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US liquid gallon" name="US gallon (liquid)" />
                </div>

                <div slot="right">
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US dry pint" name="pint (dry)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US dry quart" name="quart (dry)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US dry gallon" name="gallon (dry)" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US peck" name="peck" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US bushel" name="bushel" />
                    <SingleUnit bind:baseValue={baseValue} bind:from={from} to="US dry barrel" name="barrel (dry)" />
                </div>
            </TwoColumnView>            
        </StackView>
      </div>
    </TwoColumnView>
  </Tool>