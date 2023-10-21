<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    import Ajv from "ajv";

    let inputJsonParsingLog = "";
    let inputSchemaParsingLog = "";

    const ajv = new Ajv();
    let compiledSchema;

    function onJsonInputChanged(e) {
        const inputJsonText = e.target.value;

        // Parse input JSON
        try {
            inputJsonParsingLog = "";
            const inputJson = JSON.parse(inputJsonText);
        } catch (e) {
            inputJsonParsingLog = e.message;
        }
    }

    function onJsonSchemaChanged(e) {
        const schemaText = e.target.value;

        // Parse schema
        try {
            inputSchemaParsingLog = "";
            const schemaJson = JSON.parse(schemaText);     
            compiledSchema = ajv.compile(schemaJson);
        } catch (e) {
            inputSchemaParsingLog = e.message;
        }
    }
</script>

<TwoColumnView leftTitle="Input JSON" rightTitle="JSON schema">

    <div slot="left">
        <textarea on:input={onJsonInputChanged}></textarea>

        <div>
            {inputJsonParsingLog}
        </div>
    </div>

    <div slot="right">
        <textarea on:input={onJsonSchemaChanged}></textarea>

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
        height: 60vh;
    }
</style>