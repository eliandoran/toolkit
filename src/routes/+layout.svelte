<script>
	import ToolsMenu from "./tools-menu.svelte";
    import HeaderButton from "$lib/components/header-button.svelte";
    import Menu from "svelte-material-icons/Menu.svelte";

    import tools from "$lib/tools.js";
    import { page } from "$app/stores";    
	import Icon from "../lib/components/icon.svelte";

    let menuShownOnMobile = false;
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

    function onMenuPressed() {
        menuCollapsed = !menuCollapsed;
        menuShownOnMobile = !menuShownOnMobile;
    }
</script>

<svelte:head>
    <title>{getTitle($page.url.pathname)}</title>
</svelte:head>

<div class="page-wrapper">
    {#if $page.url.pathname !== "/"}
        <aside class="menu" class:collapsed={menuCollapsed} class:mobile-show={menuShownOnMobile}>
            <header>
                <HeaderButton on:click={onMenuPressed}>
                    <Icon icon={Menu} />
                </HeaderButton>
                <h2>Tool</h2>
            </header>

            <div class="inner-wrapper">
                <ToolsMenu {tools}
                    currentPath={$page.url.pathname}
                    collapsed={menuCollapsed}
                    bind:menuShownOnMobile={menuShownOnMobile} />                
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

    aside {                     
        display: flex;
        flex-direction: column;
    }    

    aside .inner-wrapper {
        padding: 0.5em;
        overflow: auto;
        flex-grow: 1;
    }

    .menu .inner-wrapper {
        display: none;
    }

    .menu.mobile-show .inner-wrapper {
        display: block;
    }    
    
    .page-wrapper {
        width: 95vw;
        min-height: 95vh;
        max-width: 1900px;
        margin: var(--page-gap) auto;
        background: var(--background-color);
        border-radius: 16px 16px 32px 32px;
        box-sizing: border-box;        
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
        overflow: hidden;        
        display: flex;
        flex-direction: column;
    }    

    @media (min-width: 920px) {
        .page-wrapper {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
            border-radius: 16px;
            flex-direction: row;
        }

        aside {
            border-bottom: 1px solid var(--border-color);
        }

        .collapsed {
            max-width: 48px;
        }

        .collapsed h2 {
            display: none;
        }

        .collapsed :global(header a) {
            width: 24px;
            height: 20px;
        }

        .collapsed .inner-wrapper {
            box-sizing: border-box;
            padding: 0.5em 0;
        }

        .menu .inner-wrapper {
            display: block;
        }

        .page-wrapper {                   
            height: calc(100vh - (2 * var(--page-gap)));          
            width: calc(100vw - (2 * var(--page-gap)));
            min-height: unset;
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
        display: flex;  
        flex-grow: 1;
        flex-direction: column;
    }    
</style>