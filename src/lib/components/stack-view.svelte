<script>
    export let title;
</script>

<header class="app-header">
    <slot name="header-left" />
    <h2>{title}</h2>
    <slot name="header-right" />
</header>

<slot />