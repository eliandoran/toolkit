<script>
    export let info;
    let character;

    console.log(parseInt(info.cp, 16));
    $: {
        character = String.fromCharCode(parseInt(info.cp, 16));
    }
</script>

<div class="character-preview">
    {#if character}
        <span>&nbsp;{character}&nbsp;</span>
    {/if}
</div>

<style>
    .character-preview {
        font-size: 6em;
        text-align: center;
    }

    .character-preview span {
        display: block;
        margin: auto;
        width: 50%;
        background: var(--content-background-color);
        border-radius: 10px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
</style>