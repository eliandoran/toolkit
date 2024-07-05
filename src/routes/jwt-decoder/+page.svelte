<script>
    import { InvalidTokenError, jwtDecode } from "jwt-decode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    let encodedJwt;
    let decodedJwt;
    let formattedDecodedJwt = "";

    function onInput() {
        console.log(encodedJwt);
    }

    $: {
        try {
            if (encodedJwt) {
                decodedJwt = jwtDecode(encodedJwt);
                formattedDecodedJwt = JSON.stringify(decodedJwt, null, 4);
            }
        } catch (e) {
            if (!(e instanceof InvalidTokenError)) {
                throw e;
            }
        }
        console.log(decodedJwt);
    }
</script>

<Tool>
    <TwoColumnView leftTitle="Input the JSON Web Token (JWT)" rightTitle="Info">
        <div slot="left">
            <textarea bind:value={encodedJwt}></textarea>
        </div>

        <div slot="right">
            <textarea value={formattedDecodedJwt} readonly></textarea>
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