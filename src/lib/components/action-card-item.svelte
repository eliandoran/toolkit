<script>
	import Icon from "./icon.svelte";

    export let icon = undefined;
    export let label;
</script>

<li>
    <a href="#" class="action-card-item" on:click>
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