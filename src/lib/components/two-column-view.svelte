<script>
    export let leftTitle;
    export let rightTitle = null;
    export let isCompact = false;
    export let hasPadding = true;
    export let hasLeftPadding = hasPadding;
    export let hasRightPadding = hasPadding;
    export let mobileFillBehaviour = "both";
</script>

<div class="two-columns" class:grow={mobileFillBehaviour !== "none"}>
    <section class="left" class:grow={mobileFillBehaviour === "both" || mobileFillBehaviour === "top"}>
        <header class="app-header" class:compact={isCompact}>
            <slot name="header-left-left"></slot>
            <h2>{leftTitle}</h2>
            <slot name="header-left-right"></slot>
        </header>
        
        <div class="inner-wrapper" class:padding={hasLeftPadding}>
            <slot name="left" />
        </div>
    </section>
    
    <section class="right" class:grow={mobileFillBehaviour === "both" || mobileFillBehaviour === "bottom"}>
        {#if rightTitle}
            <header class="app-header" class:compact={isCompact}>
                <slot name="header-right-left"></slot>
                <h2>{rightTitle}</h2>
                <slot name="header-right-right"></slot>
            </header>
        {/if}

        <div class="inner-wrapper" class:padding={hasRightPadding}>
            <slot name="right" />
        </div>
    </section>
</div>

<style>
    .padding {
        padding: 1em;
    }

    .right .app-header {
        border-top: 1px solid var(--border-color) !important;
        height: unset;
    }

    .two-columns {
        display: flex;
        flex-direction: column;
    }

    .left,
    .right {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
    }

    .grow {
        flex-grow: 1;
    }

    .inner-wrapper {
        flex-grow: 1;
        position: relative;
        display: flex;        
    }

    .inner-wrapper :global(> *) {
        width: 100%;
    }

    @media (min-width: 920px) {

        .left,
        .right {
            width: 50%;
            flex-grow: 0 !important;
            flex-shrink: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }      

        .right .app-header:not(.compact) {
            border-top: unset !important;
            height: var(--header-height-desktop);
        }
        
        .left {
            border-right: 1px solid var(--border-color);
        }

        .two-columns {
            flex-direction: row;
            justify-content: stretch;
            max-height: 100%;
        }

        .inner-wrapper {
            height: 100%;
            overflow: auto;
            display: block;
        }

        .inner-wrapper :global(> *) {
            width: unset;
        }
    }
</style>