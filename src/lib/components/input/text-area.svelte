<script>
    export let value;
    export let borderless = false;
    export let fill = false;
</script>

<textarea
    bind:value={value}
    class:borderless={borderless}
    class:fill={fill}></textarea>

<style>
    .borderless {
        border: 0;
    }

    .fill {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>