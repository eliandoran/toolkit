<script>
	import Card from "$lib/components/card.svelte";
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Tool from "$lib/components/tool.svelte";
	import { onMount } from "svelte";
	import { generateKeyCheckExpression, getFriendlyKeyName } from "./keycheck-generator";

    let event;

    function onKeypress(e) {
        event = e;

        e.preventDefault();
        e.stopPropagation();
    }

    onMount(() => {
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
            <h2>{getFriendlyKeyName(event)}</h2>

            <div class="columns">                        
                <div class="column">
                    <Card title="code">
                        <span class="big-value">{event.code}</span>
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
                    <Card title="keyCode">
                        <span class="big-value">{event.keyCode}</span>
                    </Card>
                </div>     

                <div class="location">
                    <Card title="location">
                        <span class="big-value">{event.location}</span>
                    </Card>
                </div>

                <div class="column">
                    <Card title="Meta keys">
                        <label class="meta-key">
                            <input type="checkbox" checked={event.ctrlKey} disabled>
                            ctrlKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.altKey} disabled>
                            altKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.shiftKey} disabled>
                            shiftKey
                        </label>

                        <label class="meta-key">
                            <input type="checkbox" checked={event.metaKey} disabled>
                            metaKey
                        </label>
                    </Card>
                </div>                                
            </div>

            <Card title="Sample JavaScript code">
                <div class="code-preview">{generateKeyCheckExpression(event)}</div>
            </Card>
        {:else}
            <p>
                Press any key to display information about it.
            </p>
        {/if}
    </OneColumnView>
</Tool>

<style>
    h2 {
        font-size: 4em;
        text-align: center;
        margin: 0.25em;
        padding: 0;
        font-weight: 100;
    }

    @media (min-height: 1400px) {
        h2 {
            margin: 1em;
        }
    }

    .columns {
        display: flex;
        column-gap: 1em;
    }

    .column {
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;      
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

    .code-preview {
        font-family: var(--font-monospace);
        white-space: pre;
    }
</style>