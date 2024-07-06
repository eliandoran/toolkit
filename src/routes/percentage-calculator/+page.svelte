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
        <div class="percentage-calculator">
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
        </div>
    </OneColumnView>
</Tool>

<style>
    .percentage-calculator :global(input) {
        width: 150px;
    }

    .percentage-calculator :global(input.percentage) {
        width: 50px;
    }

</style>