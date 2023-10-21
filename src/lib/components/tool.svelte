<div class="outer-wrapper">
    <slot />

    <footer>
        <slot name="footer" />
    </footer>
</div>

<style>
    .outer-wrapper {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        position: relative;
        height: 100%;
    }

    .outer-wrapper :global(header.app-header:first-of-type) {
        border-top: unset !important;
    }

    .inner-wrapper {
        overflow: auto;        
        flex-grow: 1;
    }
    
    header {
        display: flex;
    }    

    footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem 2rem;
        font-size: 0.75em;
        opacity: 0.6;
    }

    :global(footer a) {
        color: inherit;
    }
</style>