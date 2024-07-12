<script>
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

    let from = "liters";
    let baseValue = 1;
</script>

<Tool>    
    <TwoColumnView leftTitle="Metric units" rightTitle="Imperial units"> 
      <div slot="left">
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="microliters" name="Microliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="milliliters" name="Milliliters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="liters" name="Liters" />
          <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kiloliters" name="Kiloliters" />
      </div>
  
      <div slot="right">
          
      </div>
    </TwoColumnView>
  </Tool>