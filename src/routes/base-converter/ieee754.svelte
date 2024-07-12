<script>
    import ieee754 from "ieee754";
	import InputField from "$lib/components/input-field.svelte";
    
    let decimalValue = 123.56;
    let floatValue;

    $: {
        if (decimalValue) {
            const buffer = new Uint8Array(4);
            ieee754.write(buffer, decimalValue, 0, false, 23, 4);
            floatValue = buffer.reduce((str, byte) => str + byte.toString(2).padStart(8, "0"), "");
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

<style>
    input {
        font-family: var(--font-monospace);
        font-size: 1.25em;
        width: 400px;
    }
</style>