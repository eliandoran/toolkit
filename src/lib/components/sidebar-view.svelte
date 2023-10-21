<script>
    export let title;
</script>

<header class="app-header">
    <h2>{title}</h2>
</header>    

<div class="main-container">
    <main>
        <slot />
    </main>

    <aside>
        <slot name="sidebar" />
    </aside>
</div>

<style>
    .main-container {
        display: flex;
        height: 100%;
    }

    .main-container > main {
        flex-grow: 1;
        min-height: 0;
        height: 100%;
        position: relative;
    }

    .main-container > aside {
        padding: 1em;
        width: 250px;
        border-left: 1px solid var(--border-color);
        flex-grow: 0;
        flex-shrink: 0;
    }

    .main-container > aside :global(nav) {
        background: var(--content-background-color);
        padding: 0.5em;
        border-radius: 12px;
    }

    .main-container > aside :global(nav ul) {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .main-container > aside :global(nav a) {
        text-decoration: none;
        color: inherit;
        font-size: 0.9em;
    }

    aside h3 {
        font-size: 0.75em;
        font-weight: 400;        
    }

    aside section {
        background: var(--content-background-color);
        padding: 0.5em;
        border-radius: 12px;
    }
</style>