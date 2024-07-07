<script>
	import { base } from "$app/paths";
    import Icon from "../lib/components/icon.svelte";
    import { tooltip as tooltipAction } from "@svelte-plugins/tooltips";

    export let tools;
    export let currentPath;
    export let collapsed;
    export let menuShownOnMobile = false;

    function onItemPressed() {
        // On mobile, pressing on any item dismisses the menu automatically to make it easier for the user.
        menuShownOnMobile = false;
    }
</script>

{#each Object.entries(tools) as [categoryName, categoryItems]}
    <section class:collapsed={collapsed}>
        <h3>{categoryName}</h3>
    
        <nav class="nav">
            <ul>
                {#each categoryItems as tool} 
                    <li>
                        <a href="{base + tool.path}"
                            class="item-full"
                            class:active="{(base + tool.path) === currentPath}"
                            on:click={onItemPressed}>
                            {#if tool.icon}
                                <Icon
                                    icon={tool.icon}
                                    flipHorizontal={tool.iconFlipHorizontally} />
                            {/if}
                            <span class="title">{tool.title}</span>
                        </a>

                        <a href="{base + tool.path}"
                            class="item-collapsed"
                            class:active="{(base + tool.path) === currentPath}"
                            title={tool.title}
                            use:tooltipAction={{ position: "right" }}>
                            {#if tool.icon}
                                <Icon
                                    icon={tool.icon}
                                    flipHorizontal={tool.iconFlipHorizontally} />
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>
    </section>
{/each}

<style>

    h3 {
        margin: 0;
        font-size: 0.9em;
        opacity: 0.8;
    }

    section {
        margin: 1em 0;
    }

    section:first-of-type {
        margin-top: 0;
    }

    section:last-of-type {
        margin-bottom: 0;
    }

    a {
        display: flex !important;
        align-items: center;
    }

    a :global(.icon) {
        margin-right: 6px;
        width: 21px;
        height: 21px;
    }

    .item-collapsed {
        display: none !important;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        column-gap: 1em;
        align-items: center;
    }

    @media (min-width: 920px) {
        .collapsed {
            margin: 0;
            padding: 3px 0;
            border-bottom: 1px solid var(--border-color);
        }

        .collapsed h3 {
            display: none;
        }

        .collapsed nav a {        
            padding: 0;
            margin: auto;
            width: 32px;
            height: 32px;
        }

        .collapsed :global(.icon) {       
            display: block;
            margin: auto;
        }

        .collapsed .item-full {
            display: none !important;
        }

        .collapsed .item-collapsed {
            display: flex !important;
        }

        ul {
            display: block;
        }
    }
</style>