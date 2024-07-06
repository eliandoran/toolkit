<script>
    export let label;
    export let noLabelWrapping = false;
</script>

{#if noLabelWrapping}
    <div>
        <span class="label">{label}</span>

        <slot />
    </div>
{:else}
    <label>
        <span class="label">{label}</span>

        <slot />
    </label>
{/if}

<style>
    .label {
        display: block;        
        margin: 0.5em;
        font-size: 0.9rem;
    }

    label > span,
    div > span {
        display: block;
    }
</style>