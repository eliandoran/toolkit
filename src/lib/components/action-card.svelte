<script>
	import Card from "./card.svelte";

    export let title;
    export let noColumns = false;
</script>

<Card {title} noPadding>
    <nav class="nav" class:no-columns={noColumns}>
        <ul>
            <slot />
        </ul>
    </nav>    
</Card>

<style>
    nav:not(.no-columns) :global(ul) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        align-items: center;
    }

    nav :global(ul li) {
        margin: 0;
        border-right: 1px solid var(--card-border);
        align-self: stretch;
        display: flex;
    } 

    nav :global(ul li:first-of-type:last-of-type) {
        grid-column: 1 / 3;
    }

    @media (max-width: 919px) {
        nav :global(ul li:nth-child(2n+1):nth-last-of-type(2)) {
            border-bottom: unset;
        }
        
        nav :global(ul li:nth-child(2n+1):last-of-type) {
            grid-column: 1 / 3;
        }
    }

    @media (min-width: 920px) {
        nav :global(ul) {
            display: block !important;
        }

        nav :global(ul li) {
            border-right: 0;
        }
    }
</style>