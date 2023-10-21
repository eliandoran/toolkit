<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let inputJsonText = "";
    let inputSchemaText = "";

    let inputJsonParsingLog = "";
    let inputSchemaParsingLog = "";

    $: validateSchema(inputJsonText, inputSchemaText);

    function validateSchema(inputJsonText, inputSchemaText) {
        let inputJson;
        let schemaJson;
        
        // Parse input JSON
        try {
            inputJsonParsingLog = "";
            inputJson = JSON.parse(inputJsonText);
        } catch (e) {
            inputJsonParsingLog = e.message;
        }

        // Parse schema
        try {
            inputSchemaParsingLog = "";
            schemaJson = JSON.parse(inputSchemaText);            
        } catch (e) {
            inputSchemaParsingLog = e.message;
        }

        if (!inputJson || !schemaJson) {
            return;
        }
    }
</script>

<TwoColumnView leftTitle="Input JSON" rightTitle="JSON schema">

    <div slot="left">
        <textarea bind:value={inputJsonText}></textarea>

        <div>
            {inputJsonParsingLog}
        </div>
    </div>

    <div slot="right">
        <textarea bind:value={inputSchemaText}></textarea>

        <div>
            {inputSchemaParsingLog}
        </div>
    </div>

</TwoColumnView>

<div class="output">
    
</div>

<style>
    textarea {
        width: 100%;
    }
</style>