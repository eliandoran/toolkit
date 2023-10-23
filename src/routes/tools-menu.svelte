<script>
	import Icon from "../lib/components/icon.svelte";
    import { tooltip as tooltipAction } from "@svelte-plugins/tooltips";

    export let tools;
    export let currentPath;
    export let collapsed = false;
</script>

{#each Object.entries(tools) as [categoryName, categoryItems]}
    <section class:collapsed={collapsed}>
        <h3>{categoryName}</h3>
    
        <nav class="nav">
            <ul>
                {#each categoryItems as tool}
                    <li>                        
                        {#if !collapsed}
                            <a href="{tool.path}"
                                class:active="{tool.path === currentPath}">                                
                                {#if tool.icon}
                                    <Icon
                                        icon={tool.icon}
                                        flipHorizontal={tool.iconFlipHorizontally} />
                                {/if}
                                <span class="title">{tool.title}</span>
                            </a>
                        {:else}
                            <a href="{tool.path}"
                                class:active="{tool.path === currentPath}"
                                title={collapsed ? tool.title : ""}
                                use:tooltipAction={{ position: "right" }}>
                                {#if tool.icon}
                                    <Icon
                                        icon={tool.icon}
                                        flipHorizontal={tool.iconFlipHorizontally} />
                                {/if}
                            </a>
                        {/if}

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

    a {
        position: relative;
        display: flex !important;
        align-items: center;
    }

    a :global(.icon) {
        margin-right: 6px;
        width: 21px;
        height: 21px;
    }

    .collapsed {
        margin: 0;
        padding: 3px 0;
        border-bottom: 1px solid var(--border-color);
    }

    .collapsed h3 {
        display: none;
    }

    .collapsed nav a {
        width: 32px;
        height: 32px;
        position: relative;
        padding: 0;
        margin: auto;
    }

    .collapsed :global(.icon) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);        
    }
</style>