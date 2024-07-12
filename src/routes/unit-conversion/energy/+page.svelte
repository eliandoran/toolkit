<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import Tool from "$lib/components/tool.svelte";
	import SingleUnit from "../single-unit.svelte";

    let from = "watt-hour";
    let baseValue = 1;
</script>

<Tool>
    <OneColumnView title="Energy Conversion">
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="watt-hour" name="Watt-hour" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilowatt-hour" name="Killowatt-hour" />
        <SingleUnit bind:baseValue={baseValue} bind:from={from} to="megawatt-hour" name="Megawatt-hour" />
    </OneColumnView>
</Tool>