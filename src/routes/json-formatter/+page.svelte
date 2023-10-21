<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { oneDark } from "@codemirror/theme-one-dark";

	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";
	import SidebarView from "$lib/components/sidebar-view.svelte";

    let text = "";
    let validationErrors;
    let parsedJson;

    $: parseJSON(text);

    function parseJSON(text) {
        try {
            validationErrors = undefined;
            parsedJson = JSON.parse(text);
        } catch (e) {
            validationErrors = e.message;
        }
    }

    function format() {
        if (parsedJson) {
            text = JSON.stringify(JSON.parse(text), null, 4);
        }
    }

    function minify() {
        if (parsedJson) {
            text = JSON.stringify(JSON.parse(text));
        }
    }

</script>

<Tool hasPadding={false}>
    <SidebarView title="JSON Formatter/Minifier">
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={text} />
        </div>

        <CodeMirror
            bind:value={text}
            lang={json()}
            theme={oneDark} />

        <aside slot="sidebar">
            {#if validationErrors}
            <h3>Validation errors</h3>
            <WarningBox message={validationErrors} />
            {:else}
            <h3>Validation</h3>
            <section>                
                The JSON is valid.
            </section>

            <h3>Format/indent</h3>
            <section>
                <nav class="nav">
                    <ul>
                        <li>
                            <a href="#" on:click={format}>Prettify</a>
                        </li>

                        <li>
                            <a href="#" on:click={minify}>Minify</a>
                        </li>
                    </ul>
                </nav>
            </section>
            {/if}
        </aside>
    </SidebarView>
</Tool>

<style>
    textarea {
        width: 100%;
        min-height: 70vh;
    }    
</style>