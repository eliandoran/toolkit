<script>

    let firstValue;
    let percentage;
    let secondValue;

    $: {
        if (firstValue && secondValue) {
            percentage = (firstValue / secondValue) * 100;
        }
    }

</script>

<input type="number" bind:value={firstValue} />
is
<input type="text" class="percentage" bind:value={percentage} disabled />%
of
<input type="number" bind:value={secondValue} />