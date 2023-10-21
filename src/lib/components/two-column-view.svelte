<script>
    export let leftTitle = "";
    export let rightTitle = "";
</script>

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

<style>
    @media (min-width: 920px) {
        .left,
        .right {
            float: left;
            width: 50%;
            padding: 1em;        
            box-sizing: border-box;        
        }        
    }

    h3 {
        font-size: 12pt;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
    }
</style>