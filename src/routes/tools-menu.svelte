<script>
    import { page } from "$app/stores";
    import tools from "$lib/tools.js";
	import Icon from "../lib/components/icon.svelte";
</script>

{#each Object.entries(tools) as [categoryName, categoryItems]}
    <section>
        <h3>{categoryName}</h3>
    
        <nav class="nav">
            <ul>
                {#each categoryItems as tool}
                    <li>                        
                        <a href="{tool.path}"
                            class:active="{tool.path === $page.url.pathname}">
                            {#if tool.icon}
                                <Icon
                                    icon={tool.icon}
                                    flipHorizontal={tool.iconFlipHorizontally} />
                            {/if}
                            {tool.title}
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
</style>