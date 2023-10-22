<script>
    export let message;
</script>

{#if message}
    <div class="box">
        {message}
    </div>
{/if}

<style>
    .box {
        background-color: var(--warning-background-color);
        margin: 0;
        padding: 0.5em;
        font-size: 0.9em;
        border-radius: 4px;
    }
</style>