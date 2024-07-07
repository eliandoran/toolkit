<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { json } from "@codemirror/lang-json";
    import { theme } from "$lib/stores/codemirror.js";

	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";
	import SidebarView from "$lib/components/sidebar-view.svelte";
	import Card from "../../lib/components/card.svelte";
	import ActionCard from "$lib/components/action-card.svelte";
	import ActionCardItem from "$lib/components/action-card-item.svelte";

    let text = "";
    let validationErrors;
    let parsedJson;

    $: parseJSON(text);

    function parseJSON(text) {
        validationErrors = undefined;
        if (!text) {
            return;
        }

        try {
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

<Tool>
    <SidebarView title="JSON Formatter/Minifier">
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={text} />
        </div>

        <CodeMirror
            bind:value={text}
            lang={json()}
            theme={$theme} />

        <aside slot="sidebar">
            <Card title="Validation" thin>
                {#if validationErrors}
                    <WarningBox message={validationErrors} />
                {:else}
                    The JSON is valid.
                {/if}
            </Card>

            {#if !validationErrors}
            <ActionCard title="Format/indent">
                <ActionCardItem
                    label="Prettify"
                    on:click={format} />
                <ActionCardItem
                    label="Minify"
                    on:click={minify} />
            </ActionCard>
            {/if}
        </aside>
    </SidebarView>
</Tool>
