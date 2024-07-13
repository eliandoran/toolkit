<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import StackView from "$lib/components/stack-view.svelte";

    let jsonText;
    let jsonataText;
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
                        value={jsonataText}                
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