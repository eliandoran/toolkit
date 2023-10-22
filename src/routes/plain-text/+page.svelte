<script>
    import { page } from "$app/stores";
	import SidebarView from "$lib/components/sidebar-view.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";
	import Icon from "../../lib/components/icon.svelte";

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
    <SidebarView title="Text tools">
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
            <section>
                <nav class="nav">
                    <ul>
                        {#each $page.data.textOperations as operation}
                        <li>
                            <a href="#" on:click={() => onOperationSelected(operation)}>
                                <span class="icon">
                                    {#if operation.icon}
                                        <Icon icon={operation.icon} />
                                    {/if}
                                </span>

                                {operation.label}
                            </a>
                        </li>
                        {/each}
                    </ul>
                </nav>
            </section>
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
    }

    .stats {
        display: flex;
        margin-top: 1em;
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

    .nav a {
        position: relative;
        padding-left: 34px;
    }

    .nav .icon {
        position: absolute;
        left: 6px;
        top: 50%;
    }    

    .nav .icon :global(svg) {
        position: absolute;
        top: 50%;
        left: 0;
        width: 21px !important;
        height: 21px !important;
        transform: translateY(-50%);
    }
</style>