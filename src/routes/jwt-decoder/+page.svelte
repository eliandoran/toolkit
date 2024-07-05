<script>
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
    <TwoColumnView leftTitle="Input the JSON Web Token (JWT)" rightTitle="Decoded JWT">
        <div slot="left">
            <textarea bind:value={encodedJwt}></textarea>
        </div>

        <div slot="right">
            <WarningBox message={error} />

            {#if formattedDecodedJwt}
                <textarea value={formattedDecodedJwt} readonly></textarea>
            {/if}
        </div>
    </TwoColumnView>
</Tool>

<style>
    div[slot="left"] {
        flex-grow: 1;
        height: 100%;
    }

    div[slot="right"] {
        flex-grow: 1;
        height: 100%;
    }

    textarea {
        width: 100%;
        height: 100%;
    }
</style>