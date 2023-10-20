<style>
    :root {
        --highlight-color: orange;
        --border-color: #454545;
        --content-background-color: #363636;
        --text-color: #f5f5f5;

        color: var(--text-color);
    }

    .page-wrapper {
        display: flex;
        max-width: 1024px;
        margin: auto;
        background: #242424;
        border-radius: 16px;
        box-sizing: border-box;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
        overflow: hidden;
    }

    main {
        padding: 0 2rem;
    }

    aside {
        width: 250px;
        border-right: 1px solid var(--border-color);
    }

    aside ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }    

    aside ul li a {
        text-decoration: none;
        color: inherit;
        font-size: 0.9em;
    }

    aside ul li a.selected {
        color: var(--highlight-color);
    }

    .main-content {        
        flex-grow: 1;
    }

    .inner-wrapper {
        padding: 2em;
        overflow: auto;
    }

    header {
        border-bottom: 1px solid var(--border-color);        
        padding: 1em;
        text-align: center;
        background: #303030;        
    }

    header h2 {
        padding: 0;
        margin: 0;
        font-size: 12pt;
    }

    h2 {
        font-size: 14pt;
        font-weight: 400;
    }

    h3 {
        font-size: 12pt;
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.5em;
    }

    textarea {
        width: 100%;
        border: 1px solid gray;
        border-radius: 6px;
        min-height: 60vh;
        box-sizing: border-box;
        background-color: var(--content-background-color);
        border: 1px solid var(--border-color);
        color: var(--text-color);
        border-radius: 0;
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

        // Clear the text after changing tool to prevent any confusion.
        outputText = "";
        inputText = "";
        errorLog = "";
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

        <div class="inner-wrapper">
            <nav>
                <ul>
                    {#each allTools as thisTool}
                    <li>
                        <a href="#"
                            class:selected={thisTool == tool}
                            on:click={() => selectTool(thisTool)}>{thisTool.config.name}</a>
                    </li>
                    {/each}
                </ul>
            </nav>
        </div>
    </aside>
    
    <div class="main-content">
        <header>
            <h2>{tool.config.name}</h2>
        </header>        
    
        <div class="inner-wrapper">
            <section class="input">
                <h3>{ tool.config.fromTitle || "Input" }</h3>
                <textarea on:input={inputChanged} value={inputText}></textarea>
            </section>
        
            <section class="output">
                <h3>{ tool.config.toTitle || "Output" }</h3>
                <textarea on:input={outputChanged} value={outputText}></textarea>
            </section>
        
            <section class="log">
                {errorLog}
            </section>
        </div>
    </div>
</div>    
