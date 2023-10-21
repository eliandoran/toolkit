<script>
    import { page } from "$app/stores";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import Tool from "$lib/components/tool.svelte";

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

<Tool title="Text analyzer">
    <div class="toolbar" slot="header-left">
        <TextFilePicker bind:textFile={text} />
    </div>

    <div class="main-container">
        <main>
            <textarea bind:value={text}></textarea>   
            
            <div class="stats">
                <span><strong>{numLines}</strong> line(s)</span>
                <span><strong>{numWords}</strong> word(s)</span>
                <span><strong>{numCharacters}</strong> character(s)</span>
            </div>
        </main>

        <aside>
            <nav class="nav">
                <ul>
                    {#each $page.data.textOperations as operation}
                    <li>
                        <a href="#" on:click={() => onOperationSelected(operation)}>{operation.label}</a>
                    </li>
                    {/each}
                </ul>
            </nav>
        </aside>
    </div>
</Tool>

<style>
    textarea {
        width: 100%;
        min-height: 70vh;
    }

    .stats {
        display: flex;
        margin-top: 0.5em;
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

    .main-container {
        display: flex;
    }

    .main-container > main {
        flex-grow: 1;
    }

    .main-container > aside {
        padding-left: 1em;
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

    .nav {
        background: var(--content-background-color);
        padding: 0.5em;
        border-radius: 12px;
    }
</style>