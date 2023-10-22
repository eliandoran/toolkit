<script>
    import { page } from "$app/stores";
    import tools from "$lib/tools.js";
</script>

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