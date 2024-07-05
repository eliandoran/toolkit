<script>
    import { LoremIpsum } from "lorem-ipsum";

    import Tool from "$lib/components/tool.svelte";
	import StackView from "$lib/components/stack-view.svelte";

    const lorem = new LoremIpsum();

    let number = 5;
    let unit = "paragraphs";
    let output = "";

    $: {
        switch (unit) {
            case "words":
                output = lorem.generateWords(number);
                break;
            case "sentences":
                output = lorem.generateSentences(number);
                break;
            case "paragraphs":
                output = lorem.generateParagraphs(number);
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

    <StackView title="Generated text" isCollapsible={false} hasPadding={false} fill>
        <textarea bind:value={output} readonly></textarea>
    </StackView>
</Tool>

<style>
    textarea {
        width: 100%;
        height: 100%;
    }
</style>