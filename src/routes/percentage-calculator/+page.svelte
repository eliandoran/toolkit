<script>
	import Tool from "$lib/components/tool.svelte";
	import PercentageOfValue from "./percentage-of-value.svelte";
	import ValueFromPercentage from "./value-from-percentage.svelte";
</script>

<Tool>

    <section>
        <h3>Value from percentage</h3>
        <ValueFromPercentage />

        <h3>Percentage of a value</h3>
        <PercentageOfValue />
    </section>

    <span slot="footer">
        Heavily inspired by <a href="https://percentagecalculator.net/">percentagecalculator.net</a>.
    </span>

</Tool>