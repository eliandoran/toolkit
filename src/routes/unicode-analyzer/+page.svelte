<script>
	import StackView from "$lib/components/stack-view.svelte";
    import Tool from "$lib/components/tool.svelte";

    let text = `\
Control characters:
\t- Null-terminated string: \0, bell: \u0007, backspace: \b
\t- Horizontal tab: \t, vertical tab: \v
\t- Form feed: \f, carriage return: \r, line feed: \n
    `;
    let characters = [];

    function mapCharacter(ch) {
        switch (ch) {
            case "\0":
                return { symbol: "␀" }
            case "\u0007":
                return { symbol: "␇" }
            case "\t":
                return { symbol: "⭾" }
            case "\v":
                return { symbol: "⭿" }
            case "\r":
                return { symbol: "␍", insertAfter: "\r" }
            case "\n":
                return { symbol: "⮒", insertAfter: "\n" }
            case "\f":
                return { symbol: "␌" }
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
                    <span class="special-character">{character.symbol}</span>{character.insertAfter || ""}
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
        border: 1px solid var(--border-color);
        background: var(--header-background-color);        
        margin: 0 1px;
        display: inline-block;
        border-radius: 3px;
        padding: 0 3px;
        font-size: 1.25em;
    }
</style>
