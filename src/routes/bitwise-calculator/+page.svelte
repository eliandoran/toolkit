<script>
    import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import { applyBitwiseOperation, arrayToString, makeSameLength, stringToArray } from "./bitwise";

    let firstNumber = 1001;
    let secondNumber = 1;

    let orResult;    

    $: {
        if (firstNumber && secondNumber) {
            try {
                const firstNumberArray = stringToArray(firstNumber);
                const secondNumberArray = stringToArray(secondNumber);
                makeSameLength(firstNumberArray, secondNumberArray);
                orResult = arrayToString(applyBitwiseOperation(firstNumberArray, secondNumberArray));

                console.log("Result", applyBitwiseOperation(firstNumberArray, secondNumberArray));
            } catch (e) {
                console.log(e);
            }
        }
    }
</script>

<Tool>
    <TwoColumnView leftTitle="Input" rightTitle="Result">
        <div slot="left">
            <InputField label="First number">
                <input type="text" class="binary-input" bind:value={firstNumber} />    
            </InputField>

            <InputField label="Second number">
                <input type="text" class="binary-input" bind:value={secondNumber} />
            </InputField>
        </div>
    
        <div slot="right">
            <InputField label="OR">
                <input type="text" class="binary-input" bind:value={orResult} />
            </InputField>
        </div>
    </TwoColumnView>
</Tool>

<style>
    .binary-input {
        width: 100%;
        text-align: right;
        font-family: var(--font-monospace);
        font-size: 1.25em;
        border-radius: 6px;
        padding: 6px;
    }
</style>