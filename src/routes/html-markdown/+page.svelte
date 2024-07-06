<script>
	import HeaderButton from "$lib/components/header-button.svelte";
	import Icon from "$lib/components/icon.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    import Broom from "svelte-material-icons/Broom.svelte";
    
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

    let htmlEl;

    function onClean() {
        htmlEl.innerHTML = "";
    }

</script>

<Tool>
    <TwoColumnView leftTitle="HTML" rightTitle="Markdown" hasPadding={false}>

        <div slot="header-left-right">
            <HeaderButton on:click={onClean}>
                <Icon icon={Broom} />
            </HeaderButton>
        </div>

        <div slot="left" class="left">
            <div class="edit-area" on:input={onInputChanged} bind:this={htmlEl} contenteditable="true">
                Type your content here.
            </div>
        </div>

        <div slot="right" class="right">
            <textarea class="output" bind:value={output} readonly />
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
        border: 1px solid var(--borer-color);        
        overflow: scroll;
    }

    .output {
        height: 100%;
    }

    textarea {
        border: 0;
    }

</style>