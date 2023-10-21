<script>
    let firstNumber;
    let secondNumber;
    let percentage;

    $: {
        if (firstNumber && secondNumber) {
            // Reference: https://www.indeed.com/career-advice/career-development/percent-increase-formula
            const increase = (secondNumber - firstNumber);
            percentage = (increase / firstNumber) * 100;
        }
    }
</script>

Percentage increase from
<input type="number" bind:value={firstNumber} />
to
<input type="number" bind:value={secondNumber} />
is
<input type="text" class="percentage" bind:value={percentage} disabled />%