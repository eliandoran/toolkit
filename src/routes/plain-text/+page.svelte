<script>
    import { page } from "$app/stores";
    import ActionCard from "$lib/components/action-card.svelte";
	import ActionCardItem from "$lib/components/action-card-item.svelte";
	import SidebarView from "$lib/components/sidebar-view.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";
	import SplitJoin from "./split-join.svelte";

    let text = "";
    let numLines;
    let numWords;
    let numCharacters;

    $: {
        numLines = getNumLines(text);
        numWords = getNumWords(text);
        numCharacters = text.length;
    }

    function getNumWords(text) {
        return text.split(" ").filter((el) => el.length > 0).length;
    }

    function getNumLines(text) {
        if (text.length == 0) {
            return 0;
        }

        return text.split("\n").length;
    }

    function onOperationSelected(operation) {
        text = operation.run(text) || "";
    }
</script>

<Tool>
    <SidebarView title="Text tools" hasPadding={false}>
        <div class="toolbar" slot="header-left">
            <TextFilePicker bind:textFile={text} />
        </div>
    
        <div class="textarea-wrapper">
            <textarea bind:value={text}></textarea>   
        </div>
        
        <div class="stats">
            <span><strong>{numLines}</strong> line(s)</span>
            <span><strong>{numWords}</strong> word(s)</span>
            <span><strong>{numCharacters}</strong> character(s)</span>
        </div>
    
        <aside slot="sidebar">
            {#each Object.entries($page.data.textOperations) as [ categoryName, operations ]}
                <ActionCard title={categoryName}>
                    {#each operations as operation}
                    <ActionCardItem
                        icon={operation.icon}
                        label={operation.label}
                        tooltip={operation.description}
                        on:click={() => onOperationSelected(operation)} />
                    {/each}
                </ActionCard>
            {/each}

            <SplitJoin bind:text={text} />
        </aside>
    </SidebarView>
</Tool>

<style>
    .textarea-wrapper {
        flex-grow: 1;
    }

    textarea {
        width: 100%;
        height: 100%;
        border: 0;
    }

    .stats {
        border-top: 1px solid var(--border-color);
        display: flex;
        padding: 0.5em 1em;
    }

    .stats > span {
        margin-right: 2em;        
        font-size: 0.8em;
        flex-grow: 1;       
    }

    .stats span:nth-of-type(2) {
        text-align: center;
    }
    
    .stats span:nth-of-type(3) {
        text-align: right;
        margin-right: 0;
    }

</style>