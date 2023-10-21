<script>
    import AnsiConvert from "ansi-to-html";
	import Tool from "$lib/components/tool.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";

    let converter = new AnsiConvert();
    let ansiText = "";    
</script>

<Tool title="ANSI text" hasPadding={false}>
    <div class="toolbar" slot="header-left">
        <TextFilePicker 
            bind:textFile={ansiText}
            encoding="ascii"
        />
    </div>

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
        font-size: 8pt;
        white-space: pre;
        overflow-wrap: normal;
        overflow-x: auto;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    textarea,
    .preview {
        font-family: "perfect_dos_vga_437", Terminal, monospace;
        font-smooth: never;
        -webkit-font-smoothing: none;
    }

    .preview {
        max-width: 100%;
        overflow: scroll;
        height: 30vh;
        background: black;
        color: #aaa;
        padding: 10px;
        white-space: pre;
        flex-grow: 1;    
        font-size: 12pt;
        line-height: 1;
    }
</style>