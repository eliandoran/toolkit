<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    import Ajv from "ajv";

    let inputJsonParsingLog = "";
    let inputSchemaParsingLog = "";

    const ajv = new Ajv();
    
    let parsedJson;
    let compiledSchema;
    let isValid;

    function onJsonInputChanged(e) {
        const inputJsonText = e.target.value;

        // Parse input JSON
        try {
            inputJsonParsingLog = "";
            parsedJson = JSON.parse(inputJsonText);
        } catch (e) {
            inputJsonParsingLog = e.message;
        }

        validate();
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

        validate();
    }    

    function validate() {
        if (!parsedJson || !compiledSchema) {
            return;
        }

        isValid = compiledSchema(parsedJson);
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
    
    {#if isValid === true}
        <p>✅ The JSON is valid against the schema.</p>
    {:else if isValid === false}
        <p>❌ The JSON is not valid against the schema.</p>
    {/if}
</div>

<style>
    textarea {
        width: 100%;
        height: 60vh;
    }
</style>