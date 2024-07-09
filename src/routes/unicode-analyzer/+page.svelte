<script>
	import StackView from "$lib/components/stack-view.svelte";
    import Tool from "$lib/components/tool.svelte";    
	import TextArea from "$lib/components/input/text-area.svelte";
	import InfoBox from "./info-box.svelte";
    import { UnicodeAnalyzer } from "./analyzer";

    let text = `\
Control characters:
\t- Null-terminated string: \0, bell: \u0007, backspace: \b
\t- Horizontal tab: \t, vertical tab: \v
\t- Form feed: \f, carriage return: \r, line feed: \n
Normalization: e\u0301 vs \u00E9
Dashes: -–—―⁓
Combining characters: กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้ ก็็็็็็็็็็็็็็็็็็็็ กิิิิิิิิิิิิิิิิิิิิ ก้้้้้้้้้้้้้้้้้้้้

Combining diacritical marks: \u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f\u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034a\u034b\u034c\u034d\u034e\u034f\u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f\u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f
    `;
    let characters = [];

    let currentInfo = null;    
    const analyzer = new UnicodeAnalyzer();

    $: {
        characters = text
            .split("")
            .map((ch) => analyzer.mapCharacter(ch));
    }

    function onMouseMove(e) {
        const targetEl = e.target;
        if (!targetEl) { return; }
        
        const code = targetEl.dataset.code;
        if (!code) { return; }

        const info = analyzer.getDataByCode(code);
        if (!info) { return; }

        currentInfo = info;
    }
</script>

<Tool>
    <StackView title="Input text" isCollapsible={false} hasPadding={false}>
        <div class="input-container">
            <TextArea bind:value={text} fill borderless />
        </div>
    </StackView>

    <StackView title="Unicode analysis" fill isCompact isCollapsible={false} hasPadding={false}>
        <div class="analysis-container">
            <div class="character-view" on:mousemove={onMouseMove}>
                {#each characters as character}
                    {#if typeof character === "string"}
                        <span class="character"
                            data-code={character.charCodeAt(0)}>{character}</span>
                    {:else}
                        <span class="character special"
                            class:background={!character.noBackground}
                            data-code={character.code}>{character.symbol}</span>{character.insertAfter || ""}
                    {/if}
                {/each}
            </div>
                
            <aside class="info-box">
                <InfoBox {currentInfo} />
            </aside>
        </div>
    </StackView>
</Tool>

<style>
    .input-container {
        min-height: 200px;
    }

    .analysis-container {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;        
        flex-direction: column;
    }

    .character-view {
        font-family: monospace;
        white-space: preserve-breaks;
        word-wrap: break-word;
        overflow: auto;
        padding: 1em;
        flex-grow: 1;
        font-size: 1.25em;
        line-height: 1.4;
    }

    .character {
        white-space: no-wrap;
        min-width: 4px;        
    }
    
    .character.special.background {
        border: 1px solid var(--border-color);
        background: var(--header-background-color);        
        margin: 0 1px 2px 1px;
        display: inline-block;
        border-radius: 3px;
        padding: 0 3px;
    }
    
    .character:hover {
        background: var(--selected-background-color) !important;
    }

    .info-box {
        padding: 1em;        
        flex-shrink: 0;
        border-left: 1px solid var(--border-color);
        background: var(--header-background-color);
    }

    @media (min-width: 920px) {
        .analysis-container {
            flex-direction: row;
        }

        .info-box {
            width: 240px;
        }

        .character-view {
            font-size: inherit;
        }
    }
</style>
