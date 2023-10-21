<script>
	import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import { page } from "$app/stores";
	import TextFilePicker from "$lib/components/text-file-picker.svelte";

    let inputText = "Hello, world.";

    const { hashOperations } = $page.data;
</script>

<Tool title="Text hash">

    <div class="toolbar" slot="header-left">
        <TextFilePicker bind:textFile={inputText} />
    </div>

    <TwoColumnView>
        <div slot="left">
            <InputField label="Input text">
                <textarea bind:value={inputText}></textarea>
            </InputField>
        </div>

        <div slot="right">
            {#each hashOperations as operation }
            <InputField label="{operation.label}">
                <input type="text" value="{operation.run(inputText)}" disabled />
            </InputField>
            {/each}
        </div>
    </TwoColumnView>

    <style>
        textarea {
            height: 60vh;
        }

        input {
            width: 100%;
        }
    </style>

    <span slot="footer">
        Uses the <a href="https://github.com/entronad/crypto-es">crypto-es</a> library.
    </span>

</Tool>