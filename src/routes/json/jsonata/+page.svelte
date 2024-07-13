<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let jsonText;
</script>

<Tool>
    <TwoColumnView leftTitle="JSON text" rightTitle="JSONata">
        <div slot="left">
            <CodeMirror
                bind:value={jsonText}
                lang={json()}
                theme={$theme} />
        </div>

        <div slot="right">

        </div>
    </TwoColumnView>
</Tool>