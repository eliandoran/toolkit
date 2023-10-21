<script>
    import CryptoES from "crypto-es";

	import InputField from "$lib/components/input-field.svelte";
    import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let inputText = "Hello, world.";
    let md5Hash = "";

    $: {
        md5Hash = CryptoES.enc.Hex.stringify(CryptoES.MD5(inputText));
    }
</script>

<Tool title="Text hash">

    <TwoColumnView>
        <div slot="left">
            <InputField label="Input text">
                <textarea bind:value={inputText}></textarea>
            </InputField>
        </div>

        <div slot="right">
            <InputField label="MD5">
                <input type="text" value={md5Hash} disabled />
            </InputField>
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