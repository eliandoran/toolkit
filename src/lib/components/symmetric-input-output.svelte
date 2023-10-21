<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { oneDark } from "@codemirror/theme-one-dark";

	import TextFilePicker from "./text-file-picker.svelte";
	import TwoColumnView from "./two-column-view.svelte";
	import WarningBox from "./warning-box.svelte";

    export let fromTitle = "Input";
    export let toTitle = "Output";
    export let to;
    export let from;

    export let useCodeMirror = false;
    export let leftLang = undefined;
    export let rightLang = undefined;

    let inputText = "";
    let inputLog = "";

    let outputText = "";
    let outputLog = "";

    function handleErrors(method, ...args) {
        let output;
        let log;

        try {
            log = "";
            output = method.call(null, ...args);        
        } catch (e) {
            if (e.message) {
                log = e.message;
            }

            output = "";
        }

        return { output, log };
    }

    function inputChanged(text) {
        outputLog = "";
        if (inputText) {
            ({ output: outputText, log: inputLog } = handleErrors(to, text));
        }
    }

    function outputChanged(text) {
        inputLog = "";
        if (outputText) {
            ({ output: inputText, log: outputLog } = handleErrors(from, text));
        }
    }

    $: inputChanged(inputText);
    $: outputChanged(outputText);
</script>

<TwoColumnView leftTitle={fromTitle} rightTitle={toTitle} hasPadding={false}>
    <div class="toolbar" slot="header-left-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <div slot="left">
        {#if useCodeMirror}
            <CodeMirror
                bind:value={inputText}
                lang={leftLang}
                theme={oneDark} />
        {:else}
            <textarea
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                bind:value={inputText}></textarea>
        {/if}
        
        <WarningBox message="{inputLog}" />
    </div>

    <div class="toolbar" slot="header-right-left">
        <TextFilePicker bind:textFile={outputText} />
    </div>

    <div slot="right">
        {#if useCodeMirror}
            <CodeMirror
                bind:value={outputText}
                theme={oneDark} />
        {:else}
            <textarea
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                lang={rightLang}
                bind:value={outputText} />
        {/if}
        
        <WarningBox message={outputLog} />
    </div>
</TwoColumnView>

<style>      
    @media (min-width: 920px) {
        div[slot] {
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
        }        

        textarea {
            flex-grow: 1;
            height: 100%;
            border: 0;
        }
    }
</style>