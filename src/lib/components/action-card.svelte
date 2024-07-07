<script>
	import Card from "./card.svelte";

    export let title;
</script>

<Card {title} noPadding>
    <nav class="nav">
        <ul>
            <slot />
        </ul>
    </nav>    
</Card>

<style>
    nav :global(ul) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    nav :global(ul li) {
        margin: 0;
    }

    @media (min-width: 920px) {
        nav :global(ul) {
            display: block;
        }
    }
</style>