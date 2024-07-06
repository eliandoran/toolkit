<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import Card from "$lib/components/card.svelte";
	import InputField from "$lib/components/input-field.svelte";

  let data = "https://eliandoran.github.io/toolkit/";
  let key;

  let shape = "square";
  let haveBackgroundRoundedEdges = false;
  let haveGappedModules = false;

  let width = 256;
  let height = 256;
  let padding = 1;

  let backgroundColor = "#ffffff";
  let modulesColor = "#000000";
  let anchorsOuterColor = "#000000";
  let anchorsInnerColor = "#000000"; 
  
  let typeNumber = 40;
  let errorCorrectionLevel = "M";

  function rebuildQr(...args) {
    key = {};
  }

  $: {
    rebuildQr(data,
      width, height, padding,
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

      <Card title="Size" thin>
        <div class="columns size-options">
          <InputField label="Width">
            <input type="number" bind:value={width} />px
          </InputField>
  
          <InputField label="Height">
            <input type="number" bind:value={height} />px
          </InputField>
  
          <InputField label="Padding">
            <input type="number" bind:value={padding} min="1" /> module(s)
          </InputField>
        </div>
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
        <div class="columns color-options">
          <InputField label="Background">
            <input type="color" bind:value={backgroundColor} />
          </InputField>
  
          <InputField label="Modules">
            <input type="color" bind:value={modulesColor} />
          </InputField>
  
          <InputField label="Anchors outer">
            <input type="color" bind:value={anchorsOuterColor} />
          </InputField>
  
          <InputField label="Anchors inner">
            <input type="color" bind:value={anchorsInnerColor} />
          </InputField>
        </div>
      </Card>

      <Card title="Advanced settings" thin>
        <InputField label="Error correction level" noLabelWrapping>
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
        </InputField>

        <InputField label="Type">
          <input type="number" min="0" max="40" bind:value={typeNumber} />
        </InputField>
      </Card>
    </div>

    <div slot="right">
      {#if data}
        {#key key}
          <QrCode {data}
            {width} {height} {padding}
            {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
            {typeNumber} {errorCorrectionLevel}
            {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
          />
        {/key}
      {/if}
    </div>
  </TwoColumnView>
</Tool>

<style>
  .columns {
    display: flex;
  }

  .columns :global(> *) {
    flex-grow: 1;
  }

  .size-options input[type="number"] {
    width: 80px;
    text-align: center;
  }

  .color-options input[type="color"] {
    width: 100%;
  }
</style>