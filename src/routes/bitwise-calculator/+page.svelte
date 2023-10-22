<script>
    import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let firstNumber = 1001;
    let secondNumber = 1;

    let orResult;

    function stringToArray(inputText) {
        const binaryArray = [];

        for (let i=0; i<inputText.length; i++) {
            const ch = inputText[i];
            if (ch === '1') {                
                binaryArray.push(true);
            } else if (ch === '0') {
                binaryArray.push(false);
            } else {
                throw new Error("Invalid value.");
            }
        }

        return binaryArray;
    }

    function arrayToString(inputArray) {
        return inputArray.map((el) => el ? "1" : "0").join("");
    }

    function makeSameLength(firstNumberArray, secondNumberArray) {
        if (firstNumberArray.length == secondNumberArray.length) {
            return;
        }

        let smallerArray;
        let largerArray;

        if (firstNumberArray.length > secondNumberArray.length) {
            largerArray = firstNumberArray;
            smallerArray = secondNumberArray;
        } else {
            largerArray = secondNumberArray;
            smallerArray = firstNumberArray;
        }

        const n = (largerArray.length - smallerArray.length);
        for (let i = 0; i<n; i++) {
            smallerArray.unshift(false);
        }        
    }

    function applyBitwiseOperation(firstNumberArray, secondNumberArray) {
        const result = [];
        for (let i=0; i < firstNumberArray.length; i++) {
            result[i] = firstNumberArray[i] || secondNumberArray[i];
        }
        return result;
    }

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