<script>
	import CharacterPreview from "./character-preview.svelte";

    export let currentInfo;
</script>

<div class="container">
    {#if currentInfo}
        <CharacterPreview info={currentInfo} />    
    
        <div class="table-container">
            <div class="info-table">
                <div>
                    <span>Code point</span>
                    <span>{currentInfo.cp}</span>
                </div>
        
                <div>
                    <span>HTML entity</span>
                    <span>{currentInfo.htmlEntity}</span>
                </div>
        
                <div>
                    <span>General category</span>
                    <span>{currentInfo.gc}</span>
                </div>
        
                <div>
                    <span>Block</span>
                    <span>{currentInfo.blk}</span>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
    }

    .container :global(> *) {
        min-width: 50%;
        width: 50%;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .info-table {        
        display: table;
        font-size: 0.8em;
    }

    .info-table > div {
        display: table-row;
    }
    
    .info-table span {
        display: table-cell;
        padding: 0.25em 1em;
    }

    .table-container {
        display: flex;
        align-items: center;
    }

    @media (min-width: 920px) {
        .container {
            display: block;
        }

        .container :global(> *) {
            width: unset;
        }
    }
</style>