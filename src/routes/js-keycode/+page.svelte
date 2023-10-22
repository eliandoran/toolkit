<script>
	import Card from "$lib/components/card.svelte";
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import { onMount } from "svelte";

    let key;
    let charCode;
    let keyCode;

    function onKeypress(e) {
        ({ key, charCode, keyCode } = e);
        console.log(e);
    }

    onMount(() => {
        console.log("Hi");
        document.addEventListener("keydown", onKeypress);
    });

</script>

<Tool>
    <OneColumnView title="JavaScript Keycode">        
        <Card title="key">
            <span class="big-value">{key}</span>
        </Card>

        <Card title="charCode">
            <span class="big-value">{charCode}</span>
        </Card>

        <Card title="keyCode">
            <span class="big-value">{keyCode}</span>
        </Card>
    </OneColumnView>
</Tool>