<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let data = "";
  let key;

  function rebuildQr(data) {
    key = {};
  }

  $: {
    rebuildQr(data);
  }
</script>

<Tool>
  <TwoColumnView leftTitle="Settings" rightTitle="Generated QR">
    <div slot="left">
      <label>
        Data:
        <textarea bind:value={data} />
      </label>
    </div>

    <div slot="right">
      {#if data}
        {#key key}
          <QrCode {data} />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>