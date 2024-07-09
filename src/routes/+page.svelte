<script>
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Card from "$lib/components/card.svelte";
	import Icon from "../lib/components/icon.svelte";

    import tools from "$lib/tools.js";
	import { base } from "$app/paths";
</script>

<OneColumnView title="Toolkit">

    <main>
        {#each Object.entries(tools) as [categoryName, tools]}
            <div class="card-wrapper">
                <Card title="{categoryName}">
                    <ul>
                        {#each tools as tool}
                            <li>
                                <a href={base}{tool.path}>
                                    <div class="icon">
                                        <Icon icon={tool.icon} />
                                    </div>
            
                                    <div class="label">
                                        {tool.title}
                                    </div>
                                </a>
                            </li>                
                        {/each}
                    </ul>
                </Card>
            </div>
        {/each}
    </main>

</OneColumnView>

<style>

    main {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: stretch;
    }

    .card-wrapper {
        display: inline-block;
        padding: 1em 0.25em;
        flex-grow: 1;
    }

    .card-wrapper:first-of-type {
        padding-top: 0;
    }

    .card-wrapper :global(section) {
        margin: 0;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        row-gap: 1em;
    }

    li {
        width: 96px;
        text-align: center;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 0.8em;
    }

    .icon :global(svg) {
        width: 32px;
        height: 32px;
    }

    .label {
        line-height: 1.2;
        min-height: 2.4em;
    }

    @media (min-width: 920px) {
        .card-wrapper:first-of-type {
            padding-top: inherit;
        }

        main {
            justify-content: space-evenly;
            align-items: center;
            align-content: flex-start;
        }

        .card-wrapper {
            flex-grow: unset;
        }
    }

</style>