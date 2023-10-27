<script>
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    
    import TurndownService from "turndown";
    import { gfm } from "turndown-plugin-gfm";

    const turndownService = new TurndownService({
        headingStyle: "atx"
    });

    turndownService.use(gfm);

    let output = "";

    function onInputChanged(e) {
        const html = e.target.innerHTML;
        output = turndownService.turndown(html);
    }

</script>

<Tool>
    <TwoColumnView leftTitle="HTML" rightTitle="Markdown">

        <div slot="left" class="left">
            <div class="edit-area" on:input={onInputChanged} contenteditable="true">
                Type your content here.
            </div>
        </div>

        <div slot="right" class="right">
            <textarea class="output" bind:value={output} />
        </div>

    </TwoColumnView>
</Tool>

<style>

    .left,
    .right {
        height: 100%;
    }

    .edit-area {
        height: 100%;
        border: 1px solid var(--border-color);        
        overflow: scroll;
    }

    .output {
        height: 100%;
    }

</style>