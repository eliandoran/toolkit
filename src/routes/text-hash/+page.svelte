<script>
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import { page } from "$app/stores";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Card from "../../lib/components/card.svelte";

    let inputText = "Hello, world.";

    const { hashOperations } = $page.data;
</script>

<Tool>
    <TwoColumnView leftTitle="Input text" rightTitle="Hashes" hasPadding={false} mobileFillBehaviour="top">
        <div class="toolbar" slot="header-left-left">
            <TextFilePicker bind:textFile={inputText} />
        </div>

        <textarea bind:value={inputText} slot="left"></textarea>

        <div slot="right" class="hash-container">
            {#each hashOperations as operation }
            <Card title="{operation.label}" thin>
                <div class="hash">{operation.run(inputText)}</div>
            </Card>
            {/each}
        </div>
    </TwoColumnView>    
</Tool>

<style>
    div[slot="left"] {
        flex-grow: 1;
        height: 100%;
        display: flex;
    }

    textarea {
        border: 0;
        appearance: none;
        height: 100%;
    }

    .hash-container {
        padding: 1em 0.5em;
    }

    .hash {
        font-size: 0.75em;
        word-break: break-all;
        font-family: var(--font-monospace);
    }

    @media (min-width: 920px) {
        .hash-container {
            padding: 1em;
        }

        .hash {
            font-size: 1em;
        }
    }
</style>