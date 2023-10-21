<script>
	import TwoColumnView from "./two-column-view.svelte";

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

    function inputChanged(e) {
        const value = e.target.value;
        outputLog = "";
        ({ output: outputText, log: inputLog } = handleErrors(to, value));
    }

    function outputChanged(e) {
        const value = e.target.value;
        inputLog = "";
        ({ output: inputText, log: outputLog } = handleErrors(from, value));
    }
</script>

<TwoColumnView leftTitle={fromTitle} rightTitle={toTitle}>
    <div slot="left">
        <textarea
            on:input={inputChanged}
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            value={inputText}></textarea>
        <section class="log">{inputLog}</section>
    </div>

    <div slot="right">
        <textarea
            on:input={outputChanged}
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            value={outputText}></textarea>
        <section class="log">{outputLog}</section>
    </div>
</TwoColumnView>

<style>
    textarea {
        width: 100%;
        border: 1px solid gray;
        border-radius: 6px;
        min-height: 20vh;
        box-sizing: border-box;
        background-color: var(--content-background-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        border-radius: 0;
    }   

    @media (min-width: 920px) {
        textarea {
            min-height: 60vh;
        }
    }
</style>