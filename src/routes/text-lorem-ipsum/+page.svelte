<script>
    import { LoremIpsum } from "lorem-ipsum";

    import Tool from "$lib/components/tool.svelte";
	import StackView from "$lib/components/stack-view.svelte";

    const lorem = new LoremIpsum();

    let number = 5;
    let unit = "paragraphs";
    let output = [];

    $: {
        switch (unit) {
            case "words":
                output = lorem.generateWords(number);
                break;
            case "sentences":
                output = lorem.generateSentences(number);
                break;
            case "paragraphs":
                output = lorem.generateParagraphs(number)
                    .split("\n")
                    .map((l) => `<p>${l}</p>`)
                    .join("\n");
                break;
        }
    }
</script>

<Tool>
    <StackView title="Lorem Ipsum Generator" isCollapsible={false}>
        <div>
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
    </StackView>

    <StackView title="Generated text" isCollapsible={false} fill>
        <div class="output">
            {@html output}
        </div>
    </StackView>
</Tool>

<style>
    .output {
        font-family: serif;
        flex-grow: 1;
        overflow: auto;
    }

    .output :global(p) {
        margin: 0;
        margin-bottom: 1em;
    }

</style>