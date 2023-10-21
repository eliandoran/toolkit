<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { oneDark } from "@codemirror/theme-one-dark";

	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";

    let text = "";

    function format() {
        text = JSON.stringify(JSON.parse(text), null, 4);
    }

    function minify() {
        text = JSON.stringify(JSON.parse(text));
    }
</script>

<Tool title="JSON Formatter/Minifier" hasPadding={false}>
    <div class="toolbar" slot="header-left">
        <TextFilePicker bind:textFile={text} />
    </div>

    <div class="main-container">
        <main>
            <CodeMirror
                bind:value={text}
                lang={json()}
                theme={oneDark} />
        </main>

        <aside>
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
        </aside>

    </div>
</Tool>

<!-- TODO: Deduplicate (see text-analyer) -->
<style>
    textarea {
        width: 100%;
        min-height: 70vh;
    }

    .main-container {
        display: flex;
        height: 100%;
    }

    :global(.codemirror-wrapper) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 0.9em;
    }

    :global(.codemirror-wrapper),
    :global(.cm-editor) {
        height: 100%;
    }

    .main-container > main {
        flex-grow: 1;
        min-height: 0;
        height: 100%;
        position: relative;
    }

    .main-container > aside {
        padding: 1em;
        min-width: 200px;
        border-left: 1px solid var(--border-color);
    }

    .main-container > aside nav {
        background: var(--content-background-color);
        padding: 0.5em;
        border-radius: 12px;
    }

    .main-container > aside nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .main-container > aside nav a {
        text-decoration: none;
        color: inherit;
        font-size: 0.9em;
    }

    aside h3 {
        font-size: 0.75em;
        font-weight: 400;        
    }

    aside section {
        background: var(--content-background-color);
        padding: 0.5em;
        border-radius: 12px;
    }
</style>