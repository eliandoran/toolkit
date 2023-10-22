<script>
	import { page } from "$app/stores";
    import tools from "$lib/tools.js";
</script>

<div class="page-wrapper">
    <aside>
        <header>
            <h2>Tool</h2>
        </header>

        <div class="inner-wrapper">
            <nav class="nav">
                <ul>
                    {#each tools as tool}
                    <li>
                        <a href="{tool.path}"
                            class:active="{tool.path === $page.url.pathname}">{tool.title}</a>
                    </li>
                    {/each}
                </ul>
            </nav>
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