<div class="outer-wrapper">
    <slot />
</div>

<style>
    .outer-wrapper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        position: relative;
        flex-grow: 1;
    }

    .outer-wrapper :global(header.app-header:first-of-type) {
        border-top: unset;
    }
</style>