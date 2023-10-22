<script>
    import OneColumnView from "$lib/components/one-column-view.svelte";
    import Card from "$lib/components/card.svelte";
	import Icon from "../lib/components/icon.svelte";

    import tools from "$lib/tools.js";
</script>

<OneColumnView title="Toolkit">

    <main>
        {#each Object.entries(tools) as [categoryName, tools]}
            <div class="card-wrapper">
                <Card title="{categoryName}">
                    <ul>
                        {#each tools as tool}
                            <li>
                                <a href={tool.path}>
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
        margin: auto;
    }

    .card-wrapper {
        display: inline-block;
        padding: 1em;
    }

    .card-wrapper :global(section) {
        margin: 0;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
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

</style>