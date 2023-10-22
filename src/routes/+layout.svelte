<script>
	import ToolsMenu from "./tools-menu.svelte";

    import tools from "$lib/tools.js";
    import { page } from "$app/stores";
    const currentPath = $page.url.pathname;

    function getTitle() {
        const currentTool = getCurrentTool();
        let title = "";
        if (currentTool) {
            title = `${currentTool.title} - `
        }

        title += "Toolkit";
        return title;
    }

    function getCurrentTool() {
        for (const category of Object.values(tools)) {
            for (const tool of category) {
                if (tool.path === currentPath) {
                    return tool;
                }
            }
        }

        return null;
    }
</script>

<svelte:head>
    <title>{getTitle()}</title>
</svelte:head>

<div class="page-wrapper">
    <aside>
        <header>
            <h2>Tool</h2>
        </header>

        <div class="inner-wrapper">
            <ToolsMenu {tools} {currentPath} />
        </div>
    </aside>

    <div class="main-content">
        <slot />
    </div>
</div>

<style>
    :root {
        min-height: 100vh;
    }

    main {
        padding: 0 2rem;
    }    

    aside {        
        border-bottom: 1px solid var(--border-color);        
    }    

    aside .inner-wrapper {
        padding: 0.5em;
    }
    
    .page-wrapper {
        width: 95vw;
        min-height: 95vh;
        margin: auto;
        background: var(--background-color);
        border-radius: 16px;
        box-sizing: border-box;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
        overflow: hidden;
    }    

    @media (min-width: 920px) {
        .page-wrapper {
            display: flex;
            min-height: 90vh;
        }

        aside {
            border-bottom: 0;
            border-right: 1px solid var(--border-color);
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 250px;
        }
    }

    .main-content {        
        flex-grow: 1;
    }    
</style>