<script>
	import { page } from "$app/stores";

    const tools = [
        {
            path: "/unix-timestamp",
            title: "Unix timestamp"
        },

        {
            path: "/json-formatter",
            title: "JSON Formatter/Minifier"
        },

        {
            path: "/json-converter",
            title: "JSON<->YAML converter"
        },

        {
            path: "/base64",
            title: "Base64 Encoder/Decoder"
        },

        {
            path: "/url-encoder",
            title: "URL Encoder/Decoder"
        },

        {
            path: "/text-analyzer",
            title: "Text analyzer"
        },

        {
            path: "/json-schema",
            title: "JSON Schema Validator"
        }
    ];
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
        <header>        
            <h2>Toolkit</h2>
        </header>

        <div class="inner-wrapper">
            <slot />
        </div>
    </div>
</div>

<style>
    :root {
        height: 100vh;
        overflow: hidden;
    }

    main {
        padding: 0 2rem;
    }

    .inner-wrapper {
        padding: 2em;
        overflow: auto;
    }    

    aside {        
        border-bottom: 1px solid var(--border-color);        
    }    

    aside .inner-wrapper {
        padding: 0.5em;
    }
    
    .page-wrapper {
        width: 95vw;
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
            max-width: 1024px;
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

    header {
        border-bottom: 1px solid var(--border-color);        
        padding: 1em;
        text-align: center;
        background: var(--header-background-color);        
    }

    header h2 {
        padding: 0;
        margin: 0;
        font-size: 12pt;
    }

    h2 {
        font-size: 14pt;
        font-weight: 400;
    }    
</style>