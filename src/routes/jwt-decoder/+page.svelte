<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { theme } from "$lib/stores/codemirror.js";
    import { json } from "@codemirror/lang-json";

    import { InvalidTokenError, jwtDecode } from "jwt-decode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";

    let encodedJwt;
    let decodedJwt;
    let formattedDecodedJwt = "";
    let error;

    $: {
        error = "";
        formattedDecodedJwt = "";

        try {
            if (encodedJwt) {
                decodedJwt = jwtDecode(encodedJwt);
                formattedDecodedJwt = JSON.stringify(decodedJwt, null, 4);
            }
        } catch (e) {
            if ((e instanceof InvalidTokenError)) {
                error = e.message || "Unknown error while decoding the JWT token.";
            } else {
                throw e;
            }
        }
    }
</script>

<Tool>
    <TwoColumnView leftTitle="Input the JSON Web Token (JWT)" rightTitle="Decoded JWT" hasPadding={false}>
        <div slot="left">
            <textarea bind:value={encodedJwt}></textarea>
            <WarningBox message={error} />
        </div>

        <div slot="right">
            <div class="codemirror-outer-wrapper">
                <CodeMirror
                    value={formattedDecodedJwt}                
                    lang={json()}                    
                    theme={$theme}
                    readonly />
            </div>
        </div>
    </TwoColumnView>
</Tool>

<style>
    div[slot="left"] {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    div[slot="right"] {
        flex-grow: 1;
        height: 100%;
    }

    textarea {
        flex-grow: 1;
    }
</style>