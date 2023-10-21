<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { oneDark } from "@codemirror/theme-one-dark";

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
            <CodeMirror
                bind:value={inputJsonText}
                lang={json()}
                theme={oneDark} />
        </div>
        <WarningBox message="{inputJsonParsingLog}" />
    </StackView>

    <StackView title="JSON Schema" hasPadding={false}>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={schemaText} />
        </div>

        <div class="textarea-wrapper">
            <CodeMirror
                bind:value={schemaText}
                lang={json()}
                theme={oneDark} />
        </div>
        <WarningBox message="{inputSchemaParsingLog}" />        
    </StackView>

    <StackView title="Validation" isCollapsible={false} height="auto">
        <div class="output">
            {#if !parsedJson}
                <p>Waiting for JSON</p>
            {:else if !compiledSchema}
                <p>Waiting for schema.</p>
            {:else}
                {#if isValid === true}
                    <p>✅ The JSON is valid against the schema.</p>
                {:else if isValid === false}
                    <p>❌ The JSON is not valid against the schema.</p>
                {/if}
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

    .output p {
        margin: 0.5em;
    }
</style>