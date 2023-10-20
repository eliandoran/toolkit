<style>
    .page-wrapper {
        display: flex;
        max-width: 1024px;
        margin: auto;
    }

    aside {
        width: 300px;
    }

    aside ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }    

    main {
        font-family: sans-serif;        
        flex-grow: 1;
    }

    h2 {
        font-size: 17pt;
        font-weight: 100;
    }

    h3 {
        font-size: 13pt;
        font-weight: 100;
    }

    textarea {
        width: 100%;
        border: 1px solid gray;
        border-radius: 6px;
        min-height: 70vh;
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
        <h2>{tool.name}</h2>
    
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
