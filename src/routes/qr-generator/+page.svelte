<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import Card from "$lib/components/card.svelte";

  let data = "https://eliandoran.github.io/toolkit/";
  let key;

  let shape = "square";
  let haveBackgroundRoundedEdges = false;
  let haveGappedModules = false;

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
      shape, haveBackgroundRoundedEdges, haveGappedModules,
      backgroundColor, modulesColor, anchorsOuterColor, anchorsInnerColor,
      typeNumber, errorCorrectionLevel);
  }
</script>

<Tool>
  <TwoColumnView leftTitle="Settings" rightTitle="Generated QR">
    <div slot="left">
      <Card title="Data" thin>
        <textarea bind:value={data} />
      </Card>

      <Card title="Shape" thin>
        <div>
          Shape:

          <label>
            <input type="radio" bind:group={shape} value="square" />
            Square
          </label>
          
          <label>
            <input type="radio" bind:group={shape} value="circle" />
            Circle
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" bind:checked={haveBackgroundRoundedEdges} />
            Background with rounded edges
          </label>

          <label>
            <input type="checkbox" bind:checked={haveGappedModules} />
            Gapped modules
          </label>
        </div>
      </Card>

      <Card title="Colors" thin>
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
      </Card>

      <Card title="Error correction level" thin>
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
      </Card>

      <Card title="Advanced settings" thin>
        Type:
        <input type="number" min="0" max="40" bind:value={typeNumber} />
      </Card>
    </div>

    <div slot="right">
      {#if data}
        {#key key}
          <QrCode {data}
            {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
            {typeNumber} {errorCorrectionLevel}
            {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
          />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>