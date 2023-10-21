<script>
	import TextFilePicker from "./text-file-picker.svelte";
	import TwoColumnView from "./two-column-view.svelte";
	import WarningBox from "./warning-box.svelte";

    export let fromTitle = "Input";
    export let toTitle = "Output";
    export let to;
    export let from;

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

<TwoColumnView leftTitle={fromTitle} rightTitle={toTitle}>
    <div class="toolbar" slot="header-left-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <div slot="left">
        <textarea
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            bind:value={inputText}></textarea>
        
        <WarningBox message="{inputLog}" />
    </div>

    <div class="toolbar" slot="header-right-left">
        <TextFilePicker bind:textFile={outputText} />
    </div>

    <div slot="right">
        <textarea
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            bind:value={outputText}></textarea>
        
        <WarningBox message={outputLog} />
    </div>
</TwoColumnView>

<style>      
    @media (min-width: 920px) {
        div[slot] {
            display: flex;
            flex-direction: column;
            height: 100%;
        }        

        textarea {
            flex-grow: 1;
            height: 100%;
            border: 0;
        }
    }
</style>