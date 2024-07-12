<script>
	import InputField from "$lib/components/input-field.svelte";

    export let decimalValue;
    export let radixName;
    export let fn;

    let convertedValue = 0;

    function onValueChanged(e) {
        decimalValue = fn.from(e.target.value);
    }

    $: convertedValue = !isNaN(decimalValue) ? fn.to(decimalValue) : "";
</script>

<InputField label={radixName}>
    <input type="text"
        value={convertedValue}
        on:input={onValueChanged} />
</InputField>

<style>
    input {
        width: 100%;
        font-family: var(--font-monospace);
        font-size: 1.25em;
    }
</style>