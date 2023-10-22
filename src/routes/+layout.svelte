<script>
	import ToolsMenu from "./tools-menu.svelte";
    import HeaderButton from "$lib/components/header-button.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";

    import tools from "$lib/tools.js";
    import { page } from "$app/stores";    
	import Icon from "../lib/components/icon.svelte";

    let menuCollapsed = false;

    function getTitle(currentPath) {
        const currentTool = getCurrentTool(currentPath);
        let title = "";
        if (currentTool) {
            title = `${currentTool.title} - `
        }

        title += "Toolkit";
        return title;
    }

    function getCurrentTool(currentPath) {
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
    <title>{getTitle($page.url.pathname)}</title>
</svelte:head>

<div class="page-wrapper">
    {#if $page.url.pathname !== "/"}
        <aside class:collapsed={menuCollapsed}>
            <header>
                <HeaderButton on:click={() => menuCollapsed = !menuCollapsed}>
                    <Icon icon={Menu} />
                </HeaderButton>
                <h2>Tool</h2>
            </header>

            <div class="inner-wrapper">
                <ToolsMenu {tools} currentPath={$page.url.pathname} />                
            </div>
        </aside>
    {/if}

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

    .collapsed {
        max-width: 48px;
    }

    .collapsed h2,
    .collapsed :global(h3),
    .collapsed :global(.title) {
        display: none;
    }

    .collapsed :global(section) {
        margin: 0;
    }

    .collapsed :global(header a) {
        width: 24px;
        height: 20px;
    }

    .collapsed :global(nav a) {
        width: 32px;
        height: 32px;
        position: relative;
        padding: 0;
    }

    .collapsed :global(.icon) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);        
    }

    .collapsed .inner-wrapper {
        overflow: hidden;
        box-sizing: border-box;
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