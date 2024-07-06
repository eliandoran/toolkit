<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let data = "https://eliandoran.github.io/toolkit/";
  let key;
  let typeNumber = 40;

  function rebuildQr(...args) {
    key = {};
  }

  $: {
    rebuildQr(data, typeNumber);
  }
</script>

<Tool>
  <TwoColumnView leftTitle="Settings" rightTitle="Generated QR">
    <div slot="left">
      <label>
        Data:
        <textarea bind:value={data} />
      </label>

      <label>
        Type:
        <input type="number" min="0" max="40" bind:value={typeNumber} />
      </label>
    </div>

    <div slot="right">
      {#if data}
        {#key key}
          <QrCode {data} {typeNumber} />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>