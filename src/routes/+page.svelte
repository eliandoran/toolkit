<style>
    :root {
        --border-color: #454545;
    }

    .page-wrapper {
        display: flex;
        max-width: 1024px;
        margin: auto;
        background: #242424;
        border-radius: 16px;
        box-sizing: border-box;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    }

    aside, main {
        padding: 0 2rem;
    }

    aside {
        width: 200px;
        border-right: 1px solid var(--border-color);
    }

    aside ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }    

    main {        
        flex-grow: 1;
    }

    header {
        border-bottom: 1px solid var(--border-color);
        margin: 0 -2rem;
        padding: 0.5em 2em;
    }

    header h2 {
        padding: 0;
        margin: 0;
    }

    h2 {
        font-size: 14pt;
        font-weight: 400;
    }

    h3 {
        font-size: 13pt;
        font-weight: 100;
    }

    textarea {
        width: 100%;
        border: 1px solid gray;
        border-radius: 6px;
        min-height: 60vh;
    }

    .input,
    .output {
        float: left;
        width: 50%;
        padding: 1em;
        box-sizing: border-box;
    }
</style>

<script>
	import allTools from "$lib/tools";

    let tool = allTools[0];
    let errorLog = "";
    let inputText = "";
    let outputText = "";

    function handleErrors(method, ...args) {
        try {
            errorLog = "";
            return method.call(null, ...args);        
        } catch (e) {
            if (e.message) {
                errorLog = e.message;
            }

            return "";
        }
    }

    function selectTool(newTool) {
        tool = newTool;
    }

    function inputChanged(e) {
        const value = e.target.value;
        outputText = handleErrors(tool.to, value);
    }

    function outputChanged(e) {
        const value = e.target.value;
        inputText = handleErrors(tool.from, value);
    }
</script>

<div class="page-wrapper">
    <aside>
        <header>
            <h2>Tool</h2>
        </header>

        <nav>
            <ul>
                {#each allTools as tool}
                <li>
                    <a href="#" on:click={() => selectTool(tool)}>{tool.name}</a>
                </li>
                {/each}
            </ul>
        </nav>
    </aside>
    
    <main>
        <header>
            <h2>{tool.name}</h2>
        </header>
    
        <section class="input">
            <h3>Input</h3>
            <textarea on:input={inputChanged} value={inputText}></textarea>
        </section>
    
        <section class="output">
            <h3>Output</h3>
            <textarea on:input={outputChanged} value={outputText}></textarea>
        </section>
    
        <section class="log">
            {errorLog}
        </section>
    </main>    
</div>    
