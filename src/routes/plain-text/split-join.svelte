<script>
	import ActionCardItem from "$lib/components/action-card-item.svelte";
  import ActionCard from "$lib/components/action-card.svelte";

  export let text;
  let separator = "";

  function join() {
    text = text.split("\n").join(separator);
  }
</script>

<ActionCard title="Split/Join Lines">

  <label>
    Separator:
    <input type="text" bind:value={separator} />
  </label>

  <ActionCardItem
    label="Join"
    on:click={join} />

</ActionCard>