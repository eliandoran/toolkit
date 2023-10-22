<script>
    let number;
    let percentage;
    let result;

    $: {
        if (number && percentage) {
            result = number + (number * (percentage / 100));
        }
    }
</script>

<input type="number" bind:value={number} />
increased/decreased by
<input type="number" bind:value={percentage} />%
is
<input type="number" bind:value={result} disabled />