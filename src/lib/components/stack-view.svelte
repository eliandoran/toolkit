<script>
    export let title;
    export let height = "100%";
    export let hasPadding = true;
</script>

<header class="app-header">
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
</header>

<div class="inner-wrapper" class:padding={hasPadding} style:height={height}>
    <slot />
</div>

<style>
    .inner-wrapper.padding {
        padding: 1em;
    }
</style>