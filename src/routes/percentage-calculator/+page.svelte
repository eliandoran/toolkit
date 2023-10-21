<script>
	import Tool from "$lib/components/tool.svelte";
    import PercentageOfValue from "./percentage-of-value.svelte";
</script>

<Tool>

    <section>
        <h3>Percentage of value</h3>
        
        <PercentageOfValue />
    </section>

    <span slot="footer">
        Heavily inspired by <a href="https://percentagecalculator.net/">percentagecalculator.net</a>.
    </span>

</Tool>