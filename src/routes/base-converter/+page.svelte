<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import SingleBase from "./single-base.svelte";

    let decimalValue = 0;
</script>

<Tool>
    <OneColumnView title="Base converter">
        <SingleBase radix={2} radixName="Binary" bind:decimalValue={decimalValue} />
        <SingleBase radix={8} radixName="Octal" bind:decimalValue={decimalValue} />
        <SingleBase radix={10} radixName="Decimal" bind:decimalValue={decimalValue} />
        <SingleBase radix={16} radixName="Hexadecimal" bind:decimalValue={decimalValue} />
    </OneColumnView>
</Tool>