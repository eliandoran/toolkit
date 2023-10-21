<script>
    export let title = "Toolkit";

    export let hasPadding = true;
</script>

<div class="outer-wrapper">
    <header>        
        <slot name="header-left" />

        <h2>{title}</h2>
    </header>

    <div class="inner-wrapper" class:padding={hasPadding}>
        <slot />
    </div>

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

    .inner-wrapper {
        overflow: auto;        
        flex-grow: 1;
    }
    
    .inner-wrapper.padding {
        padding: 2em;
    }

    header {
        display: flex;
    }

    header h2 {
        flex-grow: 1;
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