<script>
	import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import Card from "../../lib/components/card.svelte";
	import PercentageDifference from "./percentage-difference.svelte";
	import PercentageIncrease from "./percentage-increase.svelte";
	import PercentageOfValue from "./percentage-of-value.svelte";
	import ValueFromPercentage from "./value-from-percentage.svelte";
</script>

<Tool>

    <OneColumnView title="Percentage calculator">
        <Card title="Value from percentage">            
            <ValueFromPercentage />
        </Card>
        
        <Card title="Percentage of value">
            <PercentageOfValue />
        </Card>

        <Card title="Percentage increase from two values">
            <PercentageDifference />
        </Card>

        <Card title="Percentage increase">
            <PercentageIncrease />
        </Card>
    </OneColumnView>

    <span slot="footer">
        Heavily inspired by <a href="https://percentagecalculator.net/">percentagecalculator.net</a>.
    </span>

</Tool>

<style>
    :global(input) {
        width: 150px;
    }

    :global(input.percentage) {
        width: 50px;
    }

</style>