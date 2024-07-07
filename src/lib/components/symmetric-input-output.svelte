<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { theme } from "$lib/stores/codemirror.js";

	import TextFilePicker from "./text-file-picker.svelte";
	import TwoColumnView from "./two-column-view.svelte";
	import WarningBox from "./warning-box.svelte";
	import TextArea from "./input/text-area.svelte";

    export let fromTitle = "Input";
    export let toTitle = "Output";
    export let to;
    export let from;

    export let useCodeMirror = false;
    /** Whether to wrap words, only has effect if the CodeMirror editor is active. */
    export let wordWrap = false;
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
        const value = e.detail || e.target?.value || "";
        outputLog = "";
        
        if (value) {
            ({ output: outputText, log: inputLog } = handleErrors(to, value));
        } else {
            outputText = "";
            inputLog = "";
        }
    }

    function outputChanged(e) {
        const value = e.detail || e.target?.value || "";
        inputLog = "";

        if (value) {
            const result = handleErrors(from, value);
            if (result.output) {
                ({ output: inputText, log: outputLog } = result);
            }
        } else {
            inputText = "";
            outputLog = "";
        }
    }
</script>

<TwoColumnView leftTitle={fromTitle} rightTitle={toTitle} hasPadding={false}>
    <div class="toolbar" slot="header-left-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <div slot="left">
        {#if useCodeMirror}
            <div class="codemirror-outer-wrapper">
                <CodeMirror                
                    value={inputText}
                    lang={leftLang}
                    theme={$theme}
                    on:change={inputChanged}
                    lineWrapping={wordWrap} />
            </div>
        {:else}
            <TextArea
                value={inputText}                
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                on:input={inputChanged} borderless fill />
        {/if}
        
        <WarningBox message="{inputLog}" />
    </div>

    <div class="toolbar" slot="header-right-left">
        <TextFilePicker bind:textFile={outputText} />
    </div>

    <div slot="right">
        {#if useCodeMirror}
            <div class="codemirror-outer-wrapper">
                <CodeMirror
                    value={outputText}                
                    lang={rightLang}
                    theme={$theme}
                    lineWrapping={wordWrap}
                    on:change={outputChanged} />
            </div>
        {:else}
            <TextArea
                value={outputText}    
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                on:input={outputChanged} borderless fill />
        {/if}
        
        <WarningBox message={outputLog} />
    </div>
</TwoColumnView>

<style> 
    div[slot="left"],
    div[slot="right"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }
</style>