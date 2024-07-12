<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import SingleUnit from "../single-unit.svelte";

    let from = "watt-hour";
    let baseValue = 1;
</script>

<Tool>
    <TwoColumnView leftTitle="Watt-hours" rightTitle="Joules">
        <div slot="left">
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="watt-hour" name="Watt-hour" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilowatt-hour" name="Killowatt-hour" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="megawatt-hour" name="Megawatt-hour" />
        </div>

        <div slot="right">
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="joules" name="Joules" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="kilojoules" name="Kilojoules" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="megajoules" name="Megajoules" />
            <SingleUnit bind:baseValue={baseValue} bind:from={from} to="gigajoules" name="Gigajoules" />
        </div>
    </TwoColumnView>
</Tool>