<script>
	import Card from "./card.svelte";

    export let title;
    export let columns = "mobile-only";
</script>

<Card {title} noPadding>
    <nav class="nav"
        class:columns-mobile={columns !== "none"}
        class:columns-desktop={columns === "always"}>
        <ul>
            <slot />
        </ul>
    </nav>    
</Card>

<style>
    nav.columns-mobile :global(ul) {
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
        nav:not(.columns-desktop) :global(ul) {
            display: block !important;
        }

        nav:not(.columns-desktop) :global(ul li) {
            border-right: 0;
        }

        nav.columns-desktop :global(ul li:nth-child(2n+1):nth-last-of-type(2)) {
            border-bottom: unset;
        }
        
        nav.columns-desktop :global(ul li:nth-child(2n+1):last-of-type) {
            grid-column: 1 / 3;
        }
    }
</style>