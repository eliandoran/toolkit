<script>
	import InputField from "$lib/components/input-field.svelte";

    import { page } from "$app/stores";

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

<div class="main-container">
    <main>
        <textarea bind:value={text}></textarea>    
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

<div class="stats">
    <span>{numLines} line(s)</span>
    <span>{numWords} word(s)</span>
    <span>{numCharacters} character(s)</span>
</div>

<style>
    textarea {
        width: 100%;
        min-height: 70vh;
    }

    .stats > span {
        margin-right: 2em;        
        font-size: 0.9em;        
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