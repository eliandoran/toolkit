<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let inputDate = new Date().toISOString();
    let outputTimestampMillis;

    $: {
        const date = new Date(inputDate);
        outputTimestampMillis = date.getTime();
    }
</script>

<TwoColumnView
    leftTitle="Input date"
    rightTitle="Unix timestamp">
    <div slot="left">
        <input type="datetime-local" bind:value={inputDate} />
    </div>

    <div slot="right">
        <input type="number" bind:value={outputTimestampMillis} />
    </div>
</TwoColumnView>