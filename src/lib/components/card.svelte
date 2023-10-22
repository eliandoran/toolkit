<script>
    export let title = undefined;
</script>

<section>

    {#if title}
    <h3>{title}</h3>
    {/if}

    <slot />

</section>

<style>
    section {
        background: var(--content-background-color);
        padding: 1.5em;
        border-radius: 12px;
        margin: 1em 0;
        border: 1px solid var(--border-color);
    }

    section h3 {
        margin: 0;
        margin-bottom: 0.5em;
        font-size: 0.8em;
        font-weight: 800;
    }
</style>