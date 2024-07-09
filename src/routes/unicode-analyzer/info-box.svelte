<script>
	import CharacterPreview from "./character-preview.svelte";

    export let currentInfo;
</script>

{#if currentInfo}
    <CharacterPreview info={currentInfo} />
    <h3>{currentInfo.name}</h3>

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
{/if}

<style>
    h3 {
        margin: 1em 0;
        font-size: 1em;
        font-weight: 300;
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
</style>