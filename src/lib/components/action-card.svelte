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
        grid-auto-rows: 1fr;
        align-items: center;
    }

    nav :global(ul li) {
        margin: 0;
        border-right: 1px solid var(--action-card-border);
        align-self: stretch;
        display: flex;
    } 

    @media (max-width: 919px) {
        nav :global(ul li:nth-last-of-type(2)) {
            border-bottom: unset;
        }
        
        nav :global(ul li:not(:first-of-type):nth-last-of-type(2n)) {
            border-bottom: 1px solid var(--action-card-border);
        }
    }

    @media (min-width: 920px) {
        nav :global(ul) {
            display: block;
        }

    }
</style>