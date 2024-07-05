<script>
    import CodeMirror from "svelte-codemirror-editor";
    import { theme } from "$lib/stores/codemirror.js";
    import { json } from "@codemirror/lang-json";

    import { InvalidTokenError, jwtDecode } from "jwt-decode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    import StackView from "$lib/components/stack-view.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";

    let encodedJwt;
    let decodedJwt;
    let error;

    let formattedHeader = "";
    let formattedPayload = "";

    $: {
        error = "";
        formattedHeader = "";
        formattedPayload = "";

        try {
            if (encodedJwt) {
                // Header
                const decodedHeader = jwtDecode(encodedJwt, { header: true })
                formattedHeader = JSON.stringify(decodedHeader, null, 4);

                // Payload
                decodedJwt = jwtDecode(encodedJwt);
                formattedPayload = JSON.stringify(decodedJwt, null, 4);                
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
    <TwoColumnView leftTitle="Input the JSON Web Token (JWT)" hasPadding={false}>
        <div slot="left">
            <textarea bind:value={encodedJwt}></textarea>
            <WarningBox message={error} />
        </div>

        <div slot="right">
            <StackView title="Header" hasPadding={false}>
                <div class="codemirror-outer-wrapper header">
                    <CodeMirror
                            value={formattedHeader}                
                            lang={json()}                    
                            theme={$theme}
                            lineWrapping={true}
                            readonly />
                </div>
            </StackView>

            <StackView title="Payload" hasPadding={false} fill={true}>
                <div class="codemirror-outer-wrapper payload">
                    <CodeMirror
                        value={formattedPayload}                
                        lang={json()}                    
                        theme={$theme}
                        lineWrapping={true}
                        readonly />
                </div>
            </StackView>
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

    .codemirror-outer-wrapper {
        position: relative;
        flex-grow: 1;
        height: 100%;
    }

    .codemirror-outer-wrapper.header {
        min-height: 6em;
    }
</style>