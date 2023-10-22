<script>
	import InputField from "$lib/components/input-field.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    import { getCommonBitwiseOperations, makeSameLength, stringToArray } from "./bitwise.js";    

    let firstNumber = 1001;
    let secondNumber = 1;

    let orResult;
    let andResult;
    let xorResult;

    $: {
        if (firstNumber && secondNumber) {
            try {
                const firstNumberArray = stringToArray(firstNumber);
                const secondNumberArray = stringToArray(secondNumber);
                makeSameLength(firstNumberArray, secondNumberArray);
                ({ orResult, andResult, xorResult } = getCommonBitwiseOperations(firstNumberArray, secondNumberArray));
            } catch (e) {
                console.log(e);
            }
        }
    }
</script>
<TwoColumnView leftTitle="Generic bitwise operations (OR, AND, XOR)" rightTitle="Result (binary)">
    <div slot="left">
        <InputField label="First number (binary)">
            <input type="text" class="binary-input" bind:value={firstNumber} />    
        </InputField>

        <InputField label="Second number (binary)">
            <input type="text" class="binary-input" bind:value={secondNumber} />
        </InputField>
    </div>

    <div slot="right">
        <InputField label="OR">
            <input type="text" class="binary-input" bind:value={orResult} disabled />
        </InputField>

        <InputField label="AND">
            <input type="text" class="binary-input" bind:value={andResult} disabled />
        </InputField>

        <InputField label="XOR">
            <input type="text" class="binary-input" bind:value={xorResult} disabled />
        </InputField>
    </div>
</TwoColumnView>