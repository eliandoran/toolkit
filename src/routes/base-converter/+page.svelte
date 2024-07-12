<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import SingleBase from "./single-base.svelte";

    import romans from "romans";

    let decimalValue = 1;

    function standardBaseConversion(radix) {
        return {
            to: (decimalValue) => {
                return decimalValue.toString(radix);
            },
            from: (sourceValue) => {
                return parseInt(sourceValue, radix)
            }
        };
    }

    const romanBase = {
        to: (decimalValue) => {
            if (decimalValue > 0 && decimalValue < 4000) {
                return romans.romanize(decimalValue);
            } else {
                return "";
            }
        },
        from: (romanStr) => {
            return romans.deromanize(romanStr);
        }
    };
</script>

<Tool>
    <OneColumnView title="Base converter">
        <SingleBase fn={standardBaseConversion(2)} radixName="Binary" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(8)} radixName="Octal" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(10)} radixName="Decimal" bind:decimalValue={decimalValue} />
        <SingleBase fn={standardBaseConversion(16)} radixName="Hexadecimal" bind:decimalValue={decimalValue} />
        <SingleBase fn={romanBase} radixName="Roman (1 up to 3999)" bind:decimalValue={decimalValue} />
    </OneColumnView>
</Tool>