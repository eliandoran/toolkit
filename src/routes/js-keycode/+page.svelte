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
        <p>
            Press any key to display information about it.
        </p>

        <div class="columns">        
            <div class="column">
                <Card title="charCode">
                    <span class="big-value">{charCode}</span>
                </Card>
            </div>
    
            <div class="column">
                <Card title="keyCode">
                    <span class="big-value">{keyCode}</span>
                </Card>
            </div>

            <div class="column">
                <Card title="key">
                    <span class="big-value">{key}</span>
                </Card>
            </div>
        </div>
    </OneColumnView>
</Tool>

<style>
    .columns {
        display: flex;
        column-gap: 1em;
    }

    .column {
        flex-grow: 1;        
    }

    .big-value {
        display: block;
        text-align: center;
        font-size: 3em;
        font-weight: 100;
    }
</style>