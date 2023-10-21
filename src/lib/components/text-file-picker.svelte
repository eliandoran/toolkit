<script>
	import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let encoding = undefined;
    export let textFile = "";

    let fileInput;

    function openFile() {
        fileInput.click();
    }

    function onFileSelected() {
        if (fileInput.files.length == 0) {
            return;
        }

        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            textFile = e.target?.result;
        };
        reader.readAsText(file, encoding);

        dispatch("selected");
    }
</script>

<input type="file"
        class="hidden"
        bind:this={fileInput}
        on:change={onFileSelected} />

<a href="#" on:click={openFile}>Open</a>