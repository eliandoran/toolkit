<script>
	import Base64Tool from "$lib/tools/base64";

    const tool = new Base64Tool();
    let inputText = "";
    let outputText = "";

    $: {
        outputText = tool.to(inputText);
    }
</script>

<section class="input">
    <textarea bind:value={inputText}></textarea>
</section>

<section class="output">
    <textarea readonly>{outputText}</textarea>
</section>