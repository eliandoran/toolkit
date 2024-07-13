<script>
    import jsonata from "jsonata";

    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import StackView from "$lib/components/stack-view.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";

    let jsonText = JSON.stringify(JSON.parse(`{"Account":{"Account Name":"Firefly","Order":[{"OrderID":"order103","Product":[{"Product Name":"Bowler Hat","ProductID":858383,"SKU":"0406654608","Description":{"Colour":"Purple","Width":300,"Height":200,"Depth":210,"Weight":0.75},"Price":34.45,"Quantity":2},{"Product Name":"Trilby hat","ProductID":858236,"SKU":"0406634348","Description":{"Colour":"Orange","Width":300,"Height":200,"Depth":210,"Weight":0.6},"Price":21.67,"Quantity":1}]},{"OrderID":"order104","Product":[{"Product Name":"Bowler Hat","ProductID":858383,"SKU":"040657863","Description":{"Colour":"Purple","Width":300,"Height":200,"Depth":210,"Weight":0.75},"Price":34.45,"Quantity":4},{"ProductID":345664,"SKU":"0406654603","Product Name":"Cloak","Description":{"Colour":"Black","Width":30,"Height":20,"Depth":210,"Weight":2},"Price":107.99,"Quantity":1}]}]}}`), null, 4);
    let jsonataText = "$sum(Account.Order.Product.(Price * Quantity))";
    let resultText = "";

    let parsedInput;
    let jsonataExpression;

    let jsonError;
    let jsonataError;

    $: {
        try {
            parsedInput = JSON.parse(jsonText);
        } catch (e) {
            jsonError = e.message;
        }
    }

    $: {
        try {
            jsonataExpression = jsonata(jsonataText);
        } catch (e) {
            onError(e);
        }
    }

    function onResult(result) {
        resultText = JSON.stringify(result, null, 4);
    }

    function onError(result) {
        console.warn(result);
        resultText = "";
        jsonataError = `${result.code}: ${result.message} at position ${result.position}`;
    }

    $: {
        if (parsedInput && jsonataExpression) {
            jsonataExpression
                .evaluate(parsedInput)
                .catch((e) => onError(e))
                .then((r) => onResult(r))
        }
    }
</script>

<Tool>
    <TwoColumnView leftTitle="JSON text" hasPadding={false}>
        <div slot="left">
            <div class="codemirror-outer-wrapper">
                <CodeMirror
                    bind:value={jsonText}
                    lang={json()}
                    theme={$theme} />
            </div>

            <WarningBox message={jsonError} />
        </div>

        <div slot="right">
            <StackView title="JSONata" hasPadding={false}>
                <div class="jsonata-wrapper">
                    <div class="codemirror-outer-wrapper jsonata">
                        <CodeMirror
                            bind:value={jsonataText}                
                            lang={json()}                    
                            theme={$theme}
                            lineWrapping={true} />
                    </div>
    
                    <WarningBox message={jsonataError} />
                </div>
            </StackView>

            <StackView title="Result" hasPadding={false} isCompact isCollapsible={false} fill>
                <div class="codemirror-outer-wrapper result">
                    <CodeMirror
                        value={resultText}                
                        lang={json()}                    
                        theme={$theme}
                        lineWrapping={true}
                        readonly />
                </div>
            </StackView>
        </div>
    </TwoColumnView>    
</Tool>

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

    .codemirror-outer-wrapper {
        position: relative;
        flex-grow: 1;
        height: 100%;        
    }

    .codemirror-outer-wrapper.jsonata {
        min-height: 6em;
    }

    .jsonata-wrapper {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 920px) {
        div[slot="right"] {
            height: 100%;
        }
    }
</style>