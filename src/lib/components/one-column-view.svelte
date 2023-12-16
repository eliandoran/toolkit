<script>
    export let title;
    export let hasPadding = true;
</script>

<div class="one-column">
    <header class="app-header">
        <slot name="header-left" />
        <h2>{title}</h2>
        <slot name="header-right" />
    </header>    

    <div class="inner-wrapper" class:padding={hasPadding}>
        <slot />
    </div>
</div>

<style>
    .one-column {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .inner-wrapper {
        height: 100%;
        overflow: auto;
    }

    .inner-wrapper.padding {
        padding: 1em;
    }
</style>