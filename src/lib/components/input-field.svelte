<script>
    export let label;
    export let noLabelWrapping = false;
</script>

{#if noLabelWrapping}
    <div class="wrapper">
        <span class="label">{label}</span>

        <slot />
    </div>
{:else}
    <label class="wrapper">
        <span class="label">{label}</span>

        <slot />
    </label>
{/if}

<style>
    .wrapper {
        margin-bottom: 0.75em;
        display: block;
    }

    .label {
        margin: 0;      
        font-size: 0.9rem;
    }

    label > span,
    div > span {
        display: block;
    }
</style>