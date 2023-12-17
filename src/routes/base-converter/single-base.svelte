<script>
	import InputField from "$lib/components/input-field.svelte";

    export let decimalValue;
    export let radixName;
    export let radix;

    let convertedValue = 0;

    function onValueChanged(e) {
        decimalValue = parseInt(e.target.value, radix);
    }

    $: convertedValue = decimalValue.toString(radix);
</script>

<InputField label={radixName}>
    <input type="text" value={convertedValue} on:input={onValueChanged} />
</InputField>
