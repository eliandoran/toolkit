<script>
	import Card from "$lib/components/card.svelte";
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import { onMount } from "svelte";
	import generateKeyCheckExpression from "./keycheck-generator";

    let event;

    function onKeypress(e) {
        event = e;
        console.log(e);

        e.preventDefault();
        e.stopPropagation();
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
        {#if event}
            <div class="columns">        
                <div class="column">
                    <Card title="charCode">
                        <span class="big-value">{event.charCode}</span>
                    </Card>
                </div>
        
                <div class="column">
                    <Card title="keyCode">
                        <span class="big-value">{event.keyCode}</span>
                    </Card>
                </div>

                <div class="column">
                    <Card title="key">
                        <span class="big-value">{event.key}</span>
                    </Card>
                </div>                
            </div>

            <div class="columns">
                <div class="column">
                    <Card title="Meta keys">
                        <label class="meta-key">
                            <input type="checkbox" checked={event.ctrlKey}>
                            ctrlKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.altKey}>
                            altKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.shiftKey}>
                            shiftKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.metaKey}>
                            metaKey
                        </label>
                    </Card>
                </div>

                <div class="column">
                    <Card title="code">
                        <span class="big-value">{event.code}</span>
                    </Card>
                </div>

                <div class="location">
                    <Card title="location">
                        <span class="big-value">{event.location}</span>
                    </Card>
                </div>
            </div>

            <div>
                <textarea value={generateKeyCheckExpression(event)} />
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

    .meta-key {
        display: block;
    }
</style>