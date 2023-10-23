<script>
	import Card from "./card.svelte";

    export let title;
</script>

<Card {title} thin>
    <nav class="nav">
        <ul>
            <slot />
        </ul>
    </nav>    
</Card>