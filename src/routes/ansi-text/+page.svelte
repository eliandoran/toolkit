<script>
    import AnsiConvert from "ansi-to-html";
	import Tool from "$lib/components/tool.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import StackView from "$lib/components/stack-view.svelte";
	import TextArea from "$lib/components/input/text-area.svelte";

    let converter = new AnsiConvert();
    let ansiText = "";    
    
    let inputExpanded = true;
    let previewExpanded = true;
    
    function onFileSelected() {
        inputExpanded = false;
        previewExpanded = true;
    }
</script>

<Tool>
    <StackView title="ANSI Text" hasPadding={false} bind:isExpanded={inputExpanded}>
        <div class="toolbar" slot="header-left">
            <TextFilePicker 
                bind:textFile={ansiText}
                on:selected={onFileSelected}
                encoding="ascii"
            />
        </div>
        <TextArea bind:value={ansiText} extraClass="ansi-box" borderless />
    </StackView>

    <StackView title="ANSI Preview" hasPadding={false} fill bind:isExpanded={previewExpanded}>    
        <div class="preview-wrapper">
            <div class="preview">
                {@html converter.toHtml(ansiText)}
            </div>
        </div>
    </StackView>
</Tool>

<style>    
    :global(.ansi-box) {
        flex-basis: 150px;
        box-sizing: border-box;
        font-size: 8pt;
        white-space: pre;
        overflow-wrap: normal;
        overflow-x: auto;
        flex-grow: 1;
    }

    :global(.ansi-box),
    .preview {
        font-family: var(--font-dos);
        font-smooth: never;
        -webkit-font-smoothing: none;
    }

    .preview-wrapper {
        background: black;
        overflow: scroll;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .preview {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        color: #aaa;
        padding: 10px;
        white-space: pre;
        font-size: 12pt;
        line-height: 1;        
    }
</style>