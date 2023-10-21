<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    import Ajv from "ajv";

    let inputJsonText;
    let schemaText;

    let inputJsonParsingLog = "";
    let inputSchemaParsingLog = "";
    let validationErrors = [];
    
    const ajv = new Ajv();
    
    let parsedJson;
    let compiledSchema;
    let isValid;

    // On input JSON changed.
    $: {
        // Parse input JSON
        try {
            inputJsonParsingLog = "";
            parsedJson = JSON.parse(inputJsonText);
        } catch (e) {
            inputJsonParsingLog = e.message;
        }

        validate();
    }

    // On schema changed.
    $: {
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
        validationErrors = compiledSchema.errors;
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
        <textarea bind:value={schemaText}></textarea>

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

    {#if validationErrors && validationErrors.length > 0}
        <table class="styled-table full-width">
            <thead>
                <tr>
                    <th>Keyword</th>
                    <th>Message</th>
                    <th>Instance path</th>
                    <th>Schema path</th>
                </tr>                
            </thead>
            <tbody>
                {#each validationErrors as error}
                <tr>
                    <td>{error.keyword}</td>
                    <td>{error.message}</td>
                    <td>{error.instancePath}</td>
                    <td>{error.schemaPath}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    textarea {
        width: 100%;
        height: 60vh;
    }
</style>