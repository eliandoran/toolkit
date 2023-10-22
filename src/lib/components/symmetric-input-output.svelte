<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { theme } from "$lib/stores/codemirror.js";

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

    function inputChanged(e) {
        const value = e.detail || e.target.value;
        console.log(value);
        outputLog = "";
        ({ output: outputText, log: inputLog } = handleErrors(to, value));
    }

    function outputChanged(e) {
        const value = e.detail || e.target.value;
        inputLog = "";
        ({ output: inputText, log: outputLog } = handleErrors(from, value));
    }
</script>

<TwoColumnView leftTitle={fromTitle} rightTitle={toTitle} hasPadding={false}>
    <div class="toolbar" slot="header-left-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <div slot="left">
        {#if useCodeMirror}
            <CodeMirror                
                value={inputText}
                lang={leftLang}
                theme={$theme}
                on:change={inputChanged} />
        {:else}
            <textarea
                value={inputText}                
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                on:input={inputChanged} />
        {/if}
        
        <WarningBox message="{inputLog}" />
    </div>

    <div class="toolbar" slot="header-right-left">
        <TextFilePicker bind:textFile={outputText} />
    </div>

    <div slot="right">
        {#if useCodeMirror}
            <CodeMirror
                value={outputText}                
                theme={$theme}
                on:change={outputChanged} />
        {:else}
            <textarea
                value={outputText}    
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                lang={rightLang}
                on:input={outputChanged} />
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