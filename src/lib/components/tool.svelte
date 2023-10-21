<script>
    export let title = "Toolkit";
</script>

<header>        
    <h2>{title}</h2>
</header>

<div class="inner-wrapper">
    <slot />
</div>

<style>
    .inner-wrapper {
        padding: 2em;
        overflow: auto;
    }
</style>