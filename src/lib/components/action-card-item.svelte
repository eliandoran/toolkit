<script>
	import Icon from "./icon.svelte";
    import { tooltip as tooltipAction } from "@svelte-plugins/tooltips";

    export let icon = undefined;
    export let label;
    export let tooltip = undefined;
</script>

<li>
    <a href="#"
        class="action-card-item"
        on:click
        title={ tooltip }
        use:tooltipAction={{ position: "left" }}>
        <Icon {icon} />

        {label}
    </a>
</li>

<style>
    .action-card-item {
        display: flex !important;
        align-items: center;
    }

    .action-card-item :global(.icon) {
        display: block;
        width: 21px;
        height: 21px;
        margin-right: 6px;
    }
</style>