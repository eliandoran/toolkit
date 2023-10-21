<script>
    export let leftTitle = "";
    export let rightTitle = "";
</script>

<div class="two-columns">
    <section class="left">
        {#if leftTitle}
        <h3>{leftTitle}</h3>
        {/if}
    
        <slot name="left" />
    </section>
    
    <section class="right">
        {#if rightTitle}
        <h3>{rightTitle}</h3>
        {/if}
    
        <slot name="right" />
    </section>
</div>

<style>
    @media (min-width: 920px) {
        .left,
        .right {
            flex-grow: 1;
            margin: 1em;        
            box-sizing: border-box;        
        }        

        .two-columns {
            display: flex;
            margin: 0 -1em;
        }
    }

    h3 {
        font-size: 12pt;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
    }
</style>