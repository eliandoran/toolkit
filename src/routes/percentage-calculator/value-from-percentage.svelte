<script>
    let percentage;
    let value;
    let result;

    $: {
        if (percentage && value) {
            result = (percentage / 100) * value;
        } else {
            result = "";
        }
    }
</script>

<input type="number" class="percentage" bind:value={percentage} />% of
<input type="number" bind:value={value} /> is
<input type="text" bind:value={result} disabled />