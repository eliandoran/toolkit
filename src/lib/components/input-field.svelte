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
        transition: color 250ms ease-in-out;
    }

    .label {
    margin: 0;      
        font-size: 0.9rem;
    }

    label > span,
    div > span {
        display: block;
    }

    .wrapper:focus-within {
        color: var(--highlight-color);
    }
</style>