<script>
    export let label;
</script>

<label>
    <span>{label}</span>

    <slot />
</label>

<style>
    label {
        display: block;        
        margin: 0.5em;
    }

    label > span {
        display: block;
    }
</style>