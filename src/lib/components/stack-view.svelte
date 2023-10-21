<script>
    export let title;
    export let height = "100%";
    export let hasPadding = true;

    let isExpanded = true;    

    function toggleCollapse() {
        isExpanded = !isExpanded;
    }
</script>

<header class="app-header">
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
    <a href="#" on:click={toggleCollapse}>{ isExpanded ? "Collapse" : "Expand" }</a>
</header>

<div class="inner-wrapper"
    class:padding={hasPadding}
    class:collapsed={!isExpanded}
    style:height={height}>
    <slot />
</div>

<style>
    .inner-wrapper {
        position: relative;
        max-height: none;
        display: flex;
        flex-direction: column;
    }

    .inner-wrapper.collapsed {
        max-height: 0;
        overflow: hidden;
    }

    .inner-wrapper.padding {
        padding: 1em;
    }
</style>