<script>
	import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
    import TwoColumnView from "$lib/components/two-column-view.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";
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

            if (inputJsonText) {
                parsedJson = JSON.parse(inputJsonText);
            }
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

            if (schemaText) {
                const schemaJson = JSON.parse(schemaText);     
                compiledSchema = ajv.compile(schemaJson);
            }
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

<Tool title="JSON Schema Validator">
    <InputField label="Input JSON">
        <textarea bind:value={inputJsonText}></textarea>    
        <WarningBox message="{inputJsonParsingLog}" />
    </InputField>

    <InputField label="JSON schema">
        <textarea bind:value={schemaText}></textarea>
        <WarningBox message="{inputSchemaParsingLog}" />        
    </InputField>

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

    <span slot="footer">
        Uses the <a href="https://www.npmjs.com/package/ajv">ajv</a> library.
    </span>
</Tool>

<style>
    textarea {
        width: 100%;
        height: 25vh;
    }
</style>