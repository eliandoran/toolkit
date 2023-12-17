<script>
	import InputField from "$lib/components/input-field.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";

    let binaryValue = "0";
    let octalValue = "0";
    let decimalValue = "0";
    let hexadecimalValue = "0";

    function onBinaryValueChanged(e) {
        updateValues(0);
    }    

    function onOctalValueChanged(e) {
        updateValues(1);
    }

    function onDecimalValueChanged(e) {
        updateValues(2);
    }

    function onHexadecimalValueChanged(e) {
        updateValues(3);
    }

    function updateValues(changedIndex) {
        // Read the value from the index.
        const value = getValueFromIndex(changedIndex);

        // Binary
        if (changedIndex != 0) {
            binaryValue = value.toString(2);
            console.log(binaryValue);
        }

        // Octal
        if (changedIndex != 1) {
            octalValue = value.toString(8);
        }

        // Decimal
        if (changedIndex != 2) {
            decimalValue = value.toString(10);
        }

        // Hexadecimal
        if (changedIndex != 3) {
            hexadecimalValue = value.toString(16);
        }
    }

    function getValueFromIndex(index) {
        switch (index) {
            case 0:
                return parseInt(binaryValue, 2);
            case 1:
                return parseInt(octalValue, 8);
            case 2:
                return parseInt(decimalValue, 10);
            case 3:
                return parseInt(hexadecimalValue, 16);
            default:
                return 0;
        }
    }
</script>

<Tool>
    <OneColumnView title="Base converter">
        <InputField label="Binary">
            <input type="text" bind:value={binaryValue} on:input={onBinaryValueChanged} />
        </InputField>

        <InputField label="Octal">
            <input type="text" bind:value={octalValue} on:input={onOctalValueChanged} />
        </InputField>        

        <InputField label="Decimal">
            <input type="text" bind:value={decimalValue} on:input={onDecimalValueChanged} />
        </InputField>

        <InputField label="Hexadecimal">
            <input type="text" bind:value={hexadecimalValue} on:input={onHexadecimalValueChanged} />
        </InputField>
    </OneColumnView>
</Tool>