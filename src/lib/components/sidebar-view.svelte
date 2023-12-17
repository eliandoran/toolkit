<script>
    export let title;
    export let hasPadding = true;
</script>

<header class="app-header">
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
</header>    

<div class="main-container">
    <main class:padding={hasPadding}>
        <slot />
    </main>

    <aside>
        <div class="inner-wrapper">
            <slot name="sidebar" />
        </div>
    </aside>
</div>

<style>
    .main-container {
        display: flex;
        flex: 1;
        min-height: 0;
        flex-direction: column;
    }    

    .padding,
    aside {
        padding: 1em;
    }

    .main-container > aside :global(nav) {
        background: var(--content-background-color);
        padding: 0;
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

    @media (min-width: 920px) {
        .main-container {
            flex-direction: row;
        }

        .main-container > main {
            flex-grow: 1;
            min-height: 0;
            position: relative;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .main-container > aside {
            padding: 1em;
            flex-basis: 270px;
            flex-grow: 0;
            border-left: 1px solid var(--border-color);
            display: flex;
            overflow-x: visible;
            overflow-y: scroll;        
        }

        .main-container > aside .inner-wrapper {
            width: 100%;     
        }
    }
</style>