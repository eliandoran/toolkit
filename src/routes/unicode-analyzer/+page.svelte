<script>
	import StackView from "$lib/components/stack-view.svelte";
    import Tool from "$lib/components/tool.svelte";

    let text = `See what's hidden in your string…	or be​hind﻿df\n\nsdfg\nsdfg`;
    let characters = [];

    function mapCharacter(ch) {
        switch (ch) {
            case "\l":
                return {
                    symbol: "LF"
                }
            case "\n":
                return {
                    symbol: "CR"
                }
            default:
                return ch;
        }
    }

    $: {
        characters = text
            .split("")
            .map(mapCharacter);
    }
</script>

<Tool>
    <StackView title="Input text" fill isCollapsible={false} hasPadding={false}>
        <textarea bind:value={text} />
    </StackView>

    <StackView title="Unicode analysis" fill isCollapsible={false}>
        <div class="character-view">
            {#each characters as character}
                {#if typeof character === "string"}
                    <span class="character">{character}</span>
                {:else}
                    <span class="special-character">{character.symbol}</span>
                {/if}
            {/each}
        </div>
    </StackView>
</Tool>

<style>
    textarea {
        border: 0;
        width: 100%;
        height: 100%;
        padding: 1em;
    }

    .character-view {
        font-family: var(--font-monospace);
        white-space: pre;
    }

    .special-character {
        font-size: 0.85em;
        border: 1px solid var(--border-color);
        background: var(--header-background-color);
        padding: 0.25em;
        margin: 0 1px;
    }
</style>
