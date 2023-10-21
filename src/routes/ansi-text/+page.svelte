<script>
    import AnsiConvert from "ansi-to-html";

	import InputField from "$lib/components/input-field.svelte";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let converter = new AnsiConvert();
    let ansiText = "";    
</script>

<Tool title="ANSI text" hasPadding={false}>
    <div class="container">
        <div class="input">
            <textarea bind:value={ansiText} />            
        </div>
    
        <div class="preview">
            {@html converter.toHtml(ansiText)}
        </div>
    </div>
</Tool>

<style>
    textarea {
        flex-basis: 150px;
        box-sizing: border-box;
        border: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .preview {
        max-width: 100%;
        overflow: scroll;
        height: 30vh;
        font-size: 11pt;
        font-family: "perfect_dos_vga_437", Terminal, monospace;
        font-smooth: never;
        -webkit-font-smoothing: none;
        background: black;
        white-space: pre;
        flex-grow: 1;        
    }
</style>