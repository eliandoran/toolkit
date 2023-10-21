<div class="page-wrapper">
    <aside>
        <header>
            <h2>Tool</h2>
        </header>

        <div class="inner-wrapper">
            <nav>
                <ul>
                    <li>
                        <a href="/unix-timestamp">Unix Timestamp</a>
                    </li>

                    <li>
                        <a href="/json-formatter">JSON Formatter/Minifier</a>
                    </li>

                    <li>
                        <a href="/base64">Base64 Encoder/Decoder</a>
                    </li>

                    <li>
                        <a href="/url-encoder">URL Encoder/Decoder</a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>

    <div class="main-content">
        <header>
            <slot name="header" />
        </header>

        <div class="inner-wrapper">
            <slot />
        </div>
    </div>
</div>

<style>
    :root {
        --highlight-color: orange;
        --border-color: #cfcfcf;
        --background-color: #fafafa;
        --header-background-color: #ebebeb;
        --content-background-color: #ffffff;
        --text-color: #323232;

        color: var(--text-color);
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --highlight-color: orange;
            --border-color: #454545;
            --background-color: #242424;
            --header-background-color: #303030;
            --content-background-color: #363636;
            --text-color: #f5f5f5;
        }
    }


    main {
        padding: 0 2rem;
    }

    aside {        
        border-bottom: 1px solid var(--border-color);
    }

    aside ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }    

    aside ul li a {
        text-decoration: none;
        color: inherit;
        font-size: 0.9em;
    }

    aside ul li a.selected {
        color: var(--highlight-color);
    }
    
    .page-wrapper {
        max-width: 1024px;
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
        }

        aside {
            width: 250px;
            border-bottom: 0;
            border-right: 1px solid var(--border-color);
        }
    }

    .main-content {        
        flex-grow: 1;
    }

    .inner-wrapper {
        padding: 2em;
        overflow: auto;
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