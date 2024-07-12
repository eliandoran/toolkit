<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import SingleBase from "./single-base.svelte";

    import romans from "romans";
    import _twoComplement from "2complement";
	import InputField from "$lib/components/input-field.svelte";
	import Ieee754 from "./ieee754.svelte";
	import StackView from "$lib/components/stack-view.svelte";

    let decimalValue = 1;
    let twoComplementBits = 8;

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

    function twoComplement(numBits) {
        return {
            to: (decimalValue) => {
                return _twoComplement
                    .int2complement(decimalValue)
                    .toString(2)
                    .padStart(numBits, "0");
            },
            from: (sourceValue) => {
                return _twoComplement.complement2int(sourceValue, numBits);
            }
        };
    };

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
    <OneColumnView title="Base converter" hasPadding={false}>
        <StackView>
            <SingleBase fn={standardBaseConversion(2)} radixName="Binary" bind:decimalValue={decimalValue} />
            <SingleBase fn={standardBaseConversion(8)} radixName="Octal" bind:decimalValue={decimalValue} />
            <SingleBase fn={standardBaseConversion(10)} radixName="Decimal" bind:decimalValue={decimalValue} />
            <SingleBase fn={standardBaseConversion(16)} radixName="Hexadecimal" bind:decimalValue={decimalValue} />
    
            <div class="two-complement">
                <SingleBase fn={twoComplement(twoComplementBits)} radixName="Two's complement" bind:decimalValue={decimalValue} />
                <InputField label="Number of bits">
                    <input type="number" min="1" step="1" bind:value={twoComplementBits} />
                </InputField>
            </div>
    
            <SingleBase fn={romanBase} radixName="Roman (1 up to 3999)" bind:decimalValue={decimalValue} />
        </StackView>

        <StackView title="IEEE 754" isCollapsible={false}>
            <Ieee754 />
        </StackView>
    </OneColumnView>
</Tool>

<style>
    .two-complement {
        display: flex;
        column-gap: 1em;
    }

    .two-complement :global(label:first-of-type) {
        flex-grow: 1;
    }

    .two-complement input[type="number"] {
        font-size: 1.25em;
        font-family: var(--font-monospace);
    }
</style>