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

Combining diacritical marks: \u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034a\u034b\u034c\u034d\u034e\u034f\u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f
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

    const combiningDouble = "\u035d\u035e\u0360\u0361\u1dcd\u035c\u035f\u0362\u1dfc";
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
            case "\b":
                return { symbol: "⌫" }
            case "\n":
                return { symbol: "⮒", insertAfter: "\n" }
            case "\f":
                return { symbol: "␌" }
            case " ":
                return { symbol: "␣", noBackground: true }
            }
            
        const info = get_unicode_by_decimal(ch.charCodeAt(0))
        if (info) {
            if (generalCategoryMappings[info.gc]) {
                const unicodeHexValue = `U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
                return { symbol: unicodeHexValue }
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
                    <span class="special-character" class:background={!character.noBackground}>{character.symbol}</span>{character.insertAfter || ""}
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
        white-space: preserve-breaks;
        word-wrap: break-word;
    }

    .character {
        white-space: no-wrap;
        min-width: 4px;        
    }

    .special-character.background {
        border: 1px solid var(--border-color);
        background: var(--header-background-color);        
        margin: 0 1px;
        display: inline-block;
        border-radius: 3px;
        padding: 0 3px;
    }
</style>
