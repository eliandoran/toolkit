<script>
    export let label;
    export let noLabelWrapping = false;
</script>

{#if noLabelWrapping}
    <div>
        <span>{label}</span>

        <slot />
    </div>
{:else}
    <label>
        <span>{label}</span>

        <slot />
    </label>
{/if}

<style>
    label,
    div {
        display: block;        
        margin: 0.5em;
    }

    label > span,
    div > span {
        display: block;
    }
</style>