<script>
    import AnsiConvert from "ansi-to-html";
	import Tool from "$lib/components/tool.svelte";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";
	import StackView from "$lib/components/stack-view.svelte";

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
        <textarea bind:value={ansiText} />            
    </StackView>

    <StackView title="ANSI Preview" hasPadding={false} bind:isExpanded={previewExpanded}>    
        <div class="preview-wrapper">
            <div class="preview">
                {@html converter.toHtml(ansiText)}
            </div>
        </div>
    </StackView>
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
        flex-grow: 1;
    }

    textarea,
    .preview {
        font-family: var(--font-dos);
        font-smooth: never;
        -webkit-font-smoothing: none;
    }

    .preview-wrapper {
        background: black;
        height: 100%;
        overflow: scroll;
        position: relative;
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