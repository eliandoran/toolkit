<script>
    export let leftTitle;
    export let rightTitle;
    export let hasPadding = true;
</script>

<div class="two-columns">
    <section class="left">
        <header class="app-header">
            <slot name="header-left-left"></slot>
            <h2>{leftTitle}</h2>
            <slot name="header-left-right"></slot>
        </header>
        
        <div class="inner-wrapper" class:padding={hasPadding}>
            <slot name="left" />
        </div>
    </section>
    
    <section class="right">
        <header class="app-header">
            <slot name="header-right-left"></slot>
            <h2>{rightTitle}</h2>
            <slot name="header-right-right"></slot>
        </header>

        <div class="inner-wrapper" class:padding={hasPadding}>
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
    }

    .two-columns {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .left,
    .right {
        flex-grow: 1;
        flex-shrink: 0;
    }

    @media (min-width: 920px) {

        .left,
        .right {
            width: 50%;
            flex-grow: 0;
            flex-shrink: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
        }      

        .right .app-header {
            border-top: unset !important;
        }
        
        .left {
            border-right: 1px solid var(--border-color);
        }

        .two-columns {
            flex-direction: row;
            justify-content: stretch;
        }

        .inner-wrapper {
            height: 100%;
        }
    }
</style>