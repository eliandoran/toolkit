<script>
	import StackView from "$lib/components/stack-view.svelte";
    import Tool from "$lib/components/tool.svelte";
    import { get_unicode_by_decimal } from "unicode-information";

    let text = `\
Control characters:
\t- Null-terminated string: \0, bell: \u0007, backspace: \b
\t- Horizontal tab: \t, vertical tab: \v
\t- Form feed: \f, carriage return: \r, line feed: \n
Normalization: e\u0301 vs \u00E9
Combining characters: กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้
    `;
    let characters = [];

    const generalCategoryMappings = {
        Cc: true,
        Cf: true,
        Co: true,
        Cs: true,
        Ll: false,
        Lm: false,
        Lo: false,
        Lt: false,
        Lu: false,
        Mc: true,
        Me: true,
        Mn: true,
        Nd: false,
        Nl: true,
        No: true,
        Pc: false,
        Pd: false,
        Pe: false,
        Pf: false,
        Pi: false,
        Po: false,
        Ps: false,
        Sc: false,
        Sk: false,
        Sm: false,
        So: false,
        Zl: true,
        Zp: true,
        Zs: true
    };

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
            }
            
        const info = get_unicode_by_decimal(ch.charCodeAt(0))
        if (info) {
            if (generalCategoryMappings[info.gc]) { // Nonspacing Mark
                return { symbol: info.name }
            }
        }

        return ch;
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
        font-family: monospace;
        white-space: pre;
    }

    .character {
        white-space: no-wrap;
        font-variant-ligatures: none;
        display: inline-block;
        min-width: 4px;
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
