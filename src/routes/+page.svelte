<style>
    main {
        font-family: sans-serif;
        max-width: 1024px;
        margin: auto;
    }

    h2 {
        font-size: 13pt;
        font-weight: 100;
    }

    textarea {
        width: 100%;
        border: 1px solid gray;
        border-radius: 6px;
        min-height: 80vh;
    }

    .input,
    .output {
        float: left;
        width: 50%;
        padding: 1em;
        box-sizing: border-box;
    }
</style>

<main>
    <section class="input">
        <h2>Input</h2>
        <textarea bind:value={inputText}></textarea>
    </section>

    <section class="output">
        <h2>Output</h2>
        <textarea readonly>{outputText}</textarea>
    </section>
</main>

<script>
	import Base64Tool from "$lib/tools/base64";

    const tool = new Base64Tool();
    let inputText = "";
    let outputText = "";

    $: {
        outputText = tool.to(inputText);
    }
</script>