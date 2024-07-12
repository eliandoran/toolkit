<script>
    import ieee754 from "ieee754";
	import InputField from "$lib/components/input-field.svelte";
    
    let decimalValue = 123.56;
    let floatValue;
    let doubleValue;

    function formatIeeeResult(buffer, mantissaLength) {
        const full = buffer
            .reduce((str, byte) => str + byte
                .toString(2)
                .padStart(8, "0"), "");

        const signOutput = full.substr(0, 1);
        const exponentOutput = full.substr(1, full.length - mantissaLength - 1);
        console.log(full.length - mantissaLength - 1);
        const mantissaOutput = full.substr(full.length - mantissaLength);
        return `${signOutput} ${exponentOutput} ${mantissaOutput}`;
    }

    function parseBinaryNotation(input) {
        // Trim whitespace
        input = input.replace(/[ ]/g, "");

        const bytes = [];
        while (input.length > 0) {
            const byte = input.substring(0, 8);
            input = input.substring(8);
            bytes.push(parseInt(byte, 2));
        }
        return new Uint8Array(bytes);
    }

    $: {
        if (decimalValue) {
            const floatBuffer = new Uint8Array(4);
            const doubleBuffer = new Uint8Array(8);
            
            ieee754.write(floatBuffer, decimalValue, 0, false, 23, 4);
            floatValue = formatIeeeResult(floatBuffer, 23);

            ieee754.write(doubleBuffer, decimalValue, 0, false, 52, 8);
            doubleValue = formatIeeeResult(doubleBuffer, 52);
        } else {
            floatValue = 0;
        }
    }

    function onIeeeValueChanged(e, isFloat) {
        const value = e.target.value;
        const floatBuffer = parseBinaryNotation(value);
        if (isFloat) {
            decimalValue = ieee754.read(floatBuffer, 0, false, 23, 4);
        } else {
            decimalValue = ieee754.read(floatBuffer, 0, false, 52, 8);
        }
    }
</script>

<InputField label="Decimal value">
    <input type="number" bind:value={decimalValue} />
</InputField>

<InputField label="32-bits (float)">
    <input type="text" value={floatValue} on:input={(e) => onIeeeValueChanged(e, true)} max="32" />
</InputField>

<InputField label="64-bits (double)">
    <input type="text" value={doubleValue} on:input={(e) => onIeeeValueChanged(e, false)} max="64" />
</InputField>

<style>
    input {
        font-family: var(--font-monospace);
        font-size: 1.25em;
        width: 100%;
    }
</style>