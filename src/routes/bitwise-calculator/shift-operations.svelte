<script>
	import InputField from "$lib/components/input-field.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import { applyBitshiftOperation } from "./bitwise";

    let number;
    let shiftBy;
    let result;

    $: {
        if (number && shiftBy) {
            result = applyBitshiftOperation(number, shiftBy);
        }
    }
</script>

<TwoColumnView leftTitle="Bitshift" rightTitle="Result">
    <div slot="left">
        <InputField label="Number (binary)">
            <input type="text" class="binary-input" bind:value={number} />
        </InputField>

        <InputField label="Shift by (decimal)">
            <input type="number" bind:value={shiftBy} />
        </InputField>
    </div>

    <div slot="right">
        <InputField label="Left shift (binary)">
            <input type="text" class="binary-input" bind:value={result} disabled />
        </InputField>
    </div>
</TwoColumnView>