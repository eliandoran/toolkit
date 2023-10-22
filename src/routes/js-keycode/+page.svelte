<script>
	import Card from "$lib/components/card.svelte";
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import { onMount } from "svelte";

    let pressed = false;
    let key;
    let charCode;
    let keyCode;
    let code;
    let location;

    function onKeypress(e) {
        ({ key, charCode, keyCode, code, location } = e);
        pressed = true;
        console.log(e);
    }

    onMount(() => {
        console.log("Hi");
        document.addEventListener("keydown", onKeypress);

        // On unmount.
        return () => {
            document.removeEventListener("keydown", onKeypress);
        };
    });

</script>

<Tool>
    <OneColumnView title="JavaScript Keycode">        
        {#if pressed}
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

            <div class="columns">
                <div class="column">
                    <Card title="code">
                        <span class="big-value">{code}</span>
                    </Card>
                </div>

                <div class="location">
                    <Card title="location">
                        <span class="big-value">{location}</span>
                    </Card>
                </div>
            </div>
        {:else}
            <p>
                Press any key to display information about it.
            </p>
        {/if}
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
        line-height: 1em;
        min-height: 1em;
    }
</style>