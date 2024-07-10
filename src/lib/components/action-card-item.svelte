<script>
	import Icon from "./icon.svelte";
    import { tooltip as tooltipAction } from "@svelte-plugins/tooltips";

    export let icon = undefined;
    export let label;
    export let href;
    export let tooltip = undefined;
</script>

<li>
    {#if !href}
        <button
            class="action-card-item"
            on:click
            title={ tooltip }
            use:tooltipAction={{ position: "left" }}
            {...$$restProps}>
            <Icon {icon} />

            {label}
        </button>
    {:else}
    <a
        class="action-card-item"
        {href}
        on:click
        title={ tooltip }
        use:tooltipAction={{ position: "left" }}
        {...$$restProps}>
        <Icon {icon} />

        {label}
    </a>
    {/if}
</li>

<style>
    .action-card-item {
        display: flex !important;
        align-items: center;
        appearance: none;
        width: 100%;
        background: none;
        border: 0;
        text-align: left;        
        padding: 0.5em 1em;
        color: inherit;
        font-size: 0.85rem;
    }

    .action-card-item:hover {
        background: var(--action-card-hover);
    }

    .action-card-item:active {
        background: var(--action-card-pressed);
    }

    li {
        border-bottom: 1px solid var(--card-border);
    }

    li:last-of-type {
        border-bottom: 0;
    }

    .action-card-item :global(.icon) {
        display: block;
        width: 21px;
        height: 21px;
        margin-right: 6px;
    }

    @media (min-width: 920px) {
        .action-card-item {
            padding: 0.6em 1em;
        }
    }
</style>