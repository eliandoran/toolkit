<script>
	import ActionCardItem from "$lib/components/action-card-item.svelte";
  import ActionCard from "$lib/components/action-card.svelte";

  import SetSplit from "svelte-material-icons/SetSplit.svelte";
  import SetMerge from "svelte-material-icons/SetMerge.svelte";

  export let text;
  let separator = "";

  function join() {
    text = text.split("\n").join(separator);
  }

  function split() {
    text = text.split(separator).join("\n");
  }

</script>

<ActionCard title="Split/Join Lines">

  <label>
    Separator:
    <input class="separator-input" type="text" bind:value={separator} />
  </label>

  <hr />

  <ActionCardItem
    label="Join"
    icon={SetSplit}
    on:click={join} />

  <ActionCardItem
    label="Split"
    icon={SetMerge}
    on:click={split} />

</ActionCard>

<style>
  .separator-input {
    width: 50px; 
    margin-left: 0.25em;
  }

</style>