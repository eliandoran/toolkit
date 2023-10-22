<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
import Tool from "$lib/components/tool.svelte";
	import PercentageDifference from "./percentage-difference.svelte";
	import PercentageIncrease from "./percentage-increase.svelte";
	import PercentageOfValue from "./percentage-of-value.svelte";
	import ValueFromPercentage from "./value-from-percentage.svelte";
</script>

<Tool>

    <OneColumnView title="Percentage calculator">
        <section>
            <ValueFromPercentage />
        </section>
    
        <section>
            <PercentageOfValue />
        </section>
    
        <section>
            <PercentageDifference />
        </section>

        <section>
            <PercentageIncrease />
        </section>
    </OneColumnView>

    <span slot="footer">
        Heavily inspired by <a href="https://percentagecalculator.net/">percentagecalculator.net</a>.
    </span>

</Tool>

<style>

    section {
        margin: 1em 0;
    }

    :global(input) {
        width: 150px;
    }

    :global(input.percentage) {
        width: 50px;
    }

</style>