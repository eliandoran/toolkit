<script>
	import ActionCardItem from "$lib/components/action-card-item.svelte";
  import ActionCard from "$lib/components/action-card.svelte";

  import SetSplit from "svelte-material-icons/SetSplit.svelte";
  import SetMerge from "svelte-material-icons/SetMerge.svelte";

  export let text;
  let separator = ",";

  function join() {
    text = text.split("\n").join(separator);
  }

  function split() {
    text = text.split(separator).join("\n");
  }

</script>

<ActionCard title="Split/Join Lines" noPadding noColumns>
  <div class="card-container">
    <div class="left">
      <label>
        Separator:
        <input class="separator-input" type="text" bind:value={separator} />
      </label>
    </div>
  
    <div class="right">
      <ActionCardItem
        label="Join"
        icon={SetMerge}
        on:click={join} />
    
      <ActionCardItem
        label="Split"
        icon={SetSplit}
        on:click={split} />
    </div>
  </div>
</ActionCard>

<style>
  .separator-input {
    width: 50px; 
    margin-left: 0.25em;
    padding: 0.25em;
    text-align: center;
    font-size: 1.1em;
    font-family: var(--font-monospace);
  }
  
  .left {
    text-align: center;
    flex-grow: 1;
  }
  
  .right {
    border-left: 1px solid var(--card-border);
    display: flex;
    align-self: stretch;
    align-items: center;
    flex-grow: 1;
  }

  .right :global(li) {
    flex-grow: 1;
  }
  
  .card-container {
    display: flex;
    align-items: center;    
  }

  @media (min-width: 920px) {
    .right {
      flex-direction: column;
    }
  }
</style>