<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import SingleBase from "./single-base.svelte";

    let decimalValue = 0;

    function standardBaseConversion(radix) {
        return {
            from: (sourceValue) => {
                return parseInt(sourceValue, radix)
            },
            to: (decimalValue) => {
                return decimalValue.toString(radix);
            }
        };
    }
</script>

<Tool>
    <OneColumnView title="Base converter">
        <SingleBase fn={standardBaseConversion(2)} radixName="Binary" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(8)} radixName="Octal" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(10)} radixName="Decimal" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(16)} radixName="Hexadecimal" bind:decimalValue={decimalValue} />
    </OneColumnView>
</Tool>