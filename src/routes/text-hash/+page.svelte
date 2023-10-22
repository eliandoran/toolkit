<script>
	import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import { page } from "$app/stores";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Card from "../../lib/components/card.svelte";

    let inputText = "Hello, world.";

    const { hashOperations } = $page.data;
</script>

<Tool>
    <div class="toolbar" slot="header-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <TwoColumnView leftTitle="Input text" rightTitle="Hashes">
        <div slot="left">
            <textarea bind:value={inputText}></textarea>
        </div>

        <div slot="right">
            {#each hashOperations as operation }
            <Card title="{operation.label}" thin>
                <div class="hash">{operation.run(inputText)}</div>
            </Card>
            {/each}
        </div>
    </TwoColumnView>    

    <span slot="footer">
        Uses the <a href="https://github.com/entronad/crypto-es">crypto-es</a> library.
    </span>

</Tool>

<style>
    textarea {
        height: 60vh;
    }

    .hash {
        font-size: 1em;
        word-break: break-all;
        font-family: monospace;
    }
</style>