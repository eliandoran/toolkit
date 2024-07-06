<script>
    import { LoremIpsum } from "lorem-ipsum";

    import Tool from "$lib/components/tool.svelte";
	import StackView from "$lib/components/stack-view.svelte";
    import MdiRefresh from "svelte-material-icons/Refresh.svelte";
	import HeaderButton from "$lib/components/header-button.svelte";
	import Icon from "$lib/components/icon.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
    
    let lorem = new LoremIpsum();

    let number = 5;
    let unit = "paragraphs";
    let output = [];

    let sentencesPerParagraphMin = 7;
    let sentencesPerParagraphMax = 15;

    let wordsPerSentenceMin = 4;
    let wordsPerSentenceMax = 16;

    $: {
        lorem = new LoremIpsum({
            sentencesPerParagraph: {
                min: sentencesPerParagraphMin,
                max: sentencesPerParagraphMax
            },
            wordsPerSentence: {
                min: wordsPerSentenceMin,
                max: wordsPerSentenceMax
            }
        });
        refresh(number, unit)
    }
    
    function refresh(number, unit) {
        switch (unit) {
            case "words":
                output = lorem.generateWords(number);
                break;
            case "sentences":
                output = lorem.generateSentences(number);
                break;
            case "paragraphs":
                output = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + lorem.generateParagraphs(number))
                    .split("\n")
                    .map((l) => `<p>${l}</p>`)
                    .join("\n");
                break;
        }
    }
</script>

<Tool>
    <TwoColumnView leftTitle="Lorem Ipsum Generator" rightTitle="Paragraph limits" isCollapsible={false}>
        <div slot="left" class="type-selector">
            <input type="number" bind:value={number} />
    
            <label>
                <input type="radio" value="words" bind:group={unit} />
                words
            </label>
            <label>
                <input type="radio" value="sentences" bind:group={unit} />
                sentences
            </label>
            <label>
                <input type="radio" value="paragraphs" bind:group={unit} />
                paragraphs
            </label>
        </div>

        <div slot="right" class="option-table">
            <div class="row">
                <div class="option">                    
                    Words per sentence:
                </div>

                <label>                
                    <input type="number" bind:value={wordsPerSentenceMin} />
                </label>
                -
                <label>
                    <input type="number" bind:value={wordsPerSentenceMax} />
                </label>
            </div>

            <div class="row">
                <div class="option">
                    Sentences per paragraph:
                </div>

                <label>                
                    <input type="number" bind:value={sentencesPerParagraphMin} />
                </label>
                -
                <label>
                    <input type="number" bind:value={sentencesPerParagraphMax} />
                </label>
            </div>
        </div>
    </TwoColumnView>

    <StackView title="Generated text" isCollapsible={false} fill>        
        <HeaderButton slot="header-right" on:click={() => refresh(number, unit)}>
            <Icon icon={MdiRefresh} />
        </HeaderButton>

        <div class="output" class:justify={unit !== "words"}>
            {@html output}
        </div>
    </StackView>
</Tool>

<style>
    .output {
        font-family: serif;
        flex-grow: 1;
    }

    .output.justify {
        text-align: justify;
    }

    .output :global(p) {
        margin: 0;
        margin-bottom: 1em;
    }

    .output :global(p:last-of-type) {
        margin-bottom: 0;
    }

    .row {
        margin: 0.25em 0;
    }

    input[type="number"] {
        width: 3em;
        text-align: center;
        border-radius: 6px;
        padding: 3px 6px;
    }

    .type-selector {
        display: flex;
        height: 100%;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    .option-table {
        display: table;
        margin: auto;
    }

    .option-table .row {
        display: table-row;
    }

    .option-table .row > * {
        display: table-cell;
        padding: 0.25em;
    }

    .option-table .row > :first-child {
        padding-right: 1em;
    } 
</style>