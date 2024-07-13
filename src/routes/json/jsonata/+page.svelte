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
            <StackView title="JSONata" hasPadding={false} fill>
                <div class="codemirror-outer-wrapper jsonata">
                    <CodeMirror
                        value={jsonataText}                
                        lang={json()}                    
                        theme={$theme}
                        lineWrapping={true} />
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
</style>