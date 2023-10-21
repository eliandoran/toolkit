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
    .inner-wrapper.padding {
        padding: 1em;
    }
</style>