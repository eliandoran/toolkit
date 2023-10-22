<script>
    export let icon;
    export let flipHorizontal = false;
</script>

<span class="icon" class:flip-horizontally={flipHorizontal}>
    <svelte:component this={icon} />
</span>

<style>
    .flip-horizontally :global(svg) {
        transform: scaleX(-1);
    }

    :global(.icon svg) {
        width: 100%;
        height: 100%;
        color: var(--icon-color);
    }
</style>