<script>
	import ActionCardItem from "$lib/components/action-card-item.svelte";

    export let url = null;
    export let icon = null;
    export let extension;
</script>

<ActionCardItem
    label="Download as {extension}"
    href={url}
    icon={icon}
    download _target="blank" />
