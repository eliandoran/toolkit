<script>
    export let title = undefined;
    export let thin = false;
</script>

{#if title}
<h3>{title}</h3>
{/if}

<section class:thin={thin}>
    <slot />
</section>

<style>
    h3 {
        margin: 0;
        margin-bottom: 0.5em;
        font-size: 0.8em;
        font-weight: 800;
        opacity: 0.8;
    }

    section {
        background: var(--content-background-color);
        padding: 1.5em;
        border-radius: 12px;
        margin: 1.5em 0;
        margin-top: 0.25em;        
        border: 1px solid var(--border-color);
    }    

    section.thin {
        padding: 0.75em;
    }
</style>