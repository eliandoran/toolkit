<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";

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
            compiledSchema = undefined;
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
    <StackView title="JSON" hasPadding={false} fill>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={inputJsonText} />
        </div>

        <div class="textarea-wrapper">
            <CodeMirror
                bind:value={inputJsonText}
                lang={json()}
                theme={$theme} />
        </div>
        <WarningBox message="{inputJsonParsingLog}" />
    </StackView>

    <StackView title="JSON Schema" hasPadding={false} fill>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={schemaText} />
        </div>

        <div class="textarea-wrapper">
            <CodeMirror
                bind:value={schemaText}
                lang={json()}
                theme={$theme} />
        </div>
        <WarningBox message="{inputSchemaParsingLog}" />        
    </StackView>

    <StackView title="Validation" isCollapsible={false} isCompact={true}>
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
</Tool>

<style>
    .textarea-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .output p {
        margin: 0.5em;
    }
</style>