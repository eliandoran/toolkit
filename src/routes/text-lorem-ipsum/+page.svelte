<script>
    import { LoremIpsum } from "lorem-ipsum";

    import Tool from "$lib/components/tool.svelte";
	import StackView from "$lib/components/stack-view.svelte";
    import MdiRefresh from "svelte-material-icons/Refresh.svelte";
	import HeaderButton from "$lib/components/header-button.svelte";
	import Icon from "$lib/components/icon.svelte";
    
    const lorem = new LoremIpsum();

    let number = 5;
    let unit = "paragraphs";
    let output = [];

    $: refresh(number, unit);
    
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
        overflow: auto;
    }

    .output.justify {
        text-align: justify;
    }

    .output :global(p) {
        margin: 0;
        margin-bottom: 1em;
    }

</style>