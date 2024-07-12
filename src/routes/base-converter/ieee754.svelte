<script>
    import ieee754 from "ieee754";
	import InputField from "$lib/components/input-field.svelte";
    
    let decimalValue = 123.56;
    let floatValue;
    let doubleValue;

    function formatIeeeResult(buffer) {
        return buffer
            .reduce((str, byte) => str + byte
                .toString(2)
                .padStart(8, "0"), "");
    }

    $: {
        if (decimalValue) {
            const floatBuffer = new Uint8Array(4);
            const doubleBuffer = new Uint8Array(8);
            
            ieee754.write(floatBuffer, decimalValue, 0, false, 23, 4);
            floatValue = formatIeeeResult(floatBuffer);

            ieee754.write(doubleBuffer, decimalValue, 0, false, 52, 8);
            doubleValue = formatIeeeResult(doubleBuffer);
        } else {
            floatValue = 0;
        }
    }
</script>

<InputField label="Decimal value">
    <input type="number" bind:value={decimalValue} />
</InputField>

<InputField label="32-bits (float)">
    <input type="number" value={floatValue} readonly />
</InputField>

<InputField label="64-bits (double)">
    <input type="number" value={doubleValue} readonly />
</InputField>

<style>
    input {
        font-family: var(--font-monospace);
        font-size: 1.25em;
        width: 100%;
    }
</style>