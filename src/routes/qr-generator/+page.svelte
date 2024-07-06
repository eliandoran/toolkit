<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let data = "https://eliandoran.github.io/toolkit/";
  let key;

  let backgroundColor = "white";
  let modulesColor = "black";
  let anchorsOuterColor = "black";
  let anchorsInnerColor = "black"; 
  
  let typeNumber = 40;
  let errorCorrectionLevel = "M";

  function rebuildQr(...args) {
    key = {};
  }

  $: {
    rebuildQr(data,
      backgroundColor, modulesColor, anchorsOuterColor, anchorsInnerColor,
      typeNumber, errorCorrectionLevel);
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
        Colors:

        <label>
          Background:
          <input type="color" bind:value={backgroundColor} />
        </label>

        <label>
          Modules:
          <input type="color" bind:value={modulesColor} />
        </label>

        <label>
          Anchors outer:
          <input type="color" bind:value={anchorsOuterColor} />
        </label>

        <label>
          Anchors inner:
          <input type="color" bind:value={anchorsInnerColor} />
        </label>
      </div>

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
          <QrCode {data}
            {typeNumber} {errorCorrectionLevel}
            {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
          />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>