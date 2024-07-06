<script>
    import HeaderButton from "$lib/components/header-button.svelte";
    import Icon from "$lib/components/icon.svelte";
    import ChevronUp from "svelte-material-icons/ChevronUp.svelte"
    import ChevronDown from "svelte-material-icons/ChevronDown.svelte"

    export let title;
    export let hasPadding = true;
    export let isCollapsible = true;
    export let isCompact = false;
    export let isExpanded = true;  
    export let fill = false;  

    function toggleCollapse() {
        isExpanded = !isExpanded;
    }
</script>

<header class="app-header"
    class:compact={isCompact}
    class:collapsed={!isExpanded}>    
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
    {#if isCollapsible}
        <HeaderButton on:click={toggleCollapse}>
            <Icon icon={ isExpanded ? ChevronUp : ChevronDown } />
        </HeaderButton>
    {/if}
</header>

<div class="inner-wrapper"
    class:padding={hasPadding}
    class:collapsed={!isExpanded}
    class:fill={fill}>
    <slot />
</div>

<style>
    header {
        border: 0;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    header.collapsed:not(:last-of-type) {
        border-bottom: 0 !important;
    }

    .inner-wrapper {
        position: relative;
        max-height: none;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
        max-height: 100%;
        transition: max-height 250ms ease-in-out;
    }

    .inner-wrapper.fill {
        height: 100%;
        flex-shrink: unset;
    }

    .inner-wrapper.collapsed {
        max-height: 0;
        overflow: hidden;
        box-sizing: border-box;
    }

    .inner-wrapper.padding {
        padding: 1em;
    }
</style>