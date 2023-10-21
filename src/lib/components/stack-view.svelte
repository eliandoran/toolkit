<script>
    export let title;
    export let hasPadding = true;
</script>

<header class="app-header">
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
</header>

<div class="inner-wrapper" class:padding={hasPadding}>
    <slot />
</div>

<style>
    .inner-wrapper {
        height: 100%;
    }

    .inner-wrapper.padding {
        padding: 1em;
    }
</style>