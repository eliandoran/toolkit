<script>
	import InputField from "$lib/components/input-field.svelte";

    let text = "";
    let numLines;
    let numCharacters;

    $: {
        numLines = getNumLines(text);
        numCharacters = text.length;
    }

    function getNumLines(text) {
        if (text.length == 0) {
            return 0;
        }

        return text.split("\n").length;
    }
</script>

<InputField label="Input text">
    <textarea bind:value={text}></textarea>    
</InputField>

<div class="stats">
    <span>{numLines} line(s)</span>
    <span>{numCharacters} character(s)</span>
</div>

<style>
    textarea {
        width: 100%;
        min-height: 30vh;
    }

    .stats > span {
        margin-right: 2em;        
        font-size: 0.9em;        
    }
</style>