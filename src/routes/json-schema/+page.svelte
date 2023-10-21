<script>
	import StackView from "$lib/components/stack-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";
    import Ajv from "ajv";
	import ValidationTable from "./validation-table.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";

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

<Tool>
    <StackView title="JSON" hasPadding={false}>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={inputJsonText} />
        </div>

        <div class="textarea-wrapper">
            <textarea bind:value={inputJsonText}></textarea>    
        </div>
        <WarningBox message="{inputJsonParsingLog}" />
    </StackView>

    <StackView title="JSON Schema" hasPadding={false}>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={schemaText} />
        </div>

        <div class="textarea-wrapper">
            <textarea bind:value={schemaText}></textarea>
        </div>
        <WarningBox message="{inputSchemaParsingLog}" />        
    </StackView>

    <StackView title="Validation">
        <div class="output">
            {#if isValid === true}
                <p>✅ The JSON is valid against the schema.</p>
            {:else if isValid === false}
                <p>❌ The JSON is not valid against the schema.</p>
            {/if}
    
            <ValidationTable {validationErrors} />
        </div>
    </StackView>

    <span slot="footer">
        Uses the <a href="https://www.npmjs.com/package/ajv">ajv</a> library.
    </span>
</Tool>

<style>
    .textarea-wrapper {
        flex-grow: 1;
    }

    textarea {
        width: 100%;
        height: 100%;
    }
</style>