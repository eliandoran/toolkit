<script>
    export let leftTitle;
    export let rightTitle;
</script>

<div class="two-columns">
    <section class="left">
        <header class="app-header">
            <slot name="header-left-left"></slot>
            <h2>{leftTitle}</h2>
            <slot name="header-left-right"></slot>
        </header>
        
        <slot name="left" />
    </section>
    
    <section class="right">        
        <header class="app-header">
            <slot name="header-right-left"></slot>
            <h2>{rightTitle}</h2>
            <slot name="header-right-right"></slot>
        </header>

        <slot name="right" />
    </section>
</div>

<style>
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
        
        .left {
            border-right: 1px solid var(--border-color);
        }

        .two-columns {
            display: flex;
            height: 100%;
            justify-content: stretch;
        }
    }

    h3 {
        font-size: 12pt;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
    }
</style>