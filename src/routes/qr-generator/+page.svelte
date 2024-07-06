<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let data = "https://eliandoran.github.io/toolkit/";
  let key;
  let typeNumber = 40;
  let errorCorrectionLevel = "M";

  function rebuildQr(...args) {
    key = {};
  }

  $: {
    rebuildQr(data, typeNumber, errorCorrectionLevel);
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

      <div>
        Error correction level:

        <label>
          <input type="radio" bind:group={errorCorrectionLevel} value="L" />
          L (~7%)
        </label>

        <label>
          <input type="radio" bind:group={errorCorrectionLevel} value="M" />
          M (~15%)
        </label>

        <label>
          <input type="radio" bind:group={errorCorrectionLevel} value="Q" />
          Q (~25%)
        </label>

        <label>
          <input type="radio" bind:group={errorCorrectionLevel} value="H" />
          H (~30%)
        </label>
      </div>
    </div>

    <div slot="right">
      {#if data}
        {#key key}
          <QrCode {data} {typeNumber} {errorCorrectionLevel} />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>