<script>
    import AnsiConvert from "ansi-to-html";

	import InputField from "$lib/components/input-field.svelte";
	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let converter = new AnsiConvert();
    let ansiText = "";    
</script>

<Tool title="ANSI text">
    <InputField label="ANSI Text">
        <textarea bind:value={ansiText} />            
    </InputField>

    <InputField label="Preview" />
    <div class="preview">
        {@html converter.toHtml(ansiText)}
    </div>
</Tool>

<style>
    textarea {
        min-height: 30vh;
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
    }
</style>