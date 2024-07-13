<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import StackView from "$lib/components/stack-view.svelte";

    let jsonText = JSON.stringify(JSON.parse(`{"Account":{"Account Name":"Firefly","Order":[{"OrderID":"order103","Product":[{"Product Name":"Bowler Hat","ProductID":858383,"SKU":"0406654608","Description":{"Colour":"Purple","Width":300,"Height":200,"Depth":210,"Weight":0.75},"Price":34.45,"Quantity":2},{"Product Name":"Trilby hat","ProductID":858236,"SKU":"0406634348","Description":{"Colour":"Orange","Width":300,"Height":200,"Depth":210,"Weight":0.6},"Price":21.67,"Quantity":1}]},{"OrderID":"order104","Product":[{"Product Name":"Bowler Hat","ProductID":858383,"SKU":"040657863","Description":{"Colour":"Purple","Width":300,"Height":200,"Depth":210,"Weight":0.75},"Price":34.45,"Quantity":4},{"ProductID":345664,"SKU":"0406654603","Product Name":"Cloak","Description":{"Colour":"Black","Width":30,"Height":20,"Depth":210,"Weight":2},"Price":107.99,"Quantity":1}]}]}}`), null, 4);
    let jsonataText = "$sum(Account.Order.Product.(Price * Quantity))";
    let resultText = "";
</script>

<Tool>
    <TwoColumnView leftTitle="JSON text" hasPadding={false}>
        <div slot="left">
            <CodeMirror
                bind:value={jsonText}
                lang={json()}
                theme={$theme} />
        </div>

        <div slot="right">
            <StackView title="JSONata" hasPadding={false}>
                <div class="codemirror-outer-wrapper jsonata">
                    <CodeMirror
                        value={jsonataText}                
                        lang={json()}                    
                        theme={$theme}
                        lineWrapping={true} />
                </div>
            </StackView>

            <StackView title="Result" hasPadding={false} isCompact fill>
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
    div[slot="right"] {
        flex-grow: 1;
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

    @media (min-width: 920px) {
        div[slot="right"] {
            height: 100%;
        }
    }
</style>