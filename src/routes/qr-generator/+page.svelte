<script>
  import QrCode from "@castlenine/svelte-qrcode";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";
	import Card from "$lib/components/card.svelte";
	import InputField from "$lib/components/input-field.svelte";
	import WarningBox from "$lib/components/warning-box.svelte";
	import TextArea from "$lib/components/input/text-area.svelte";
	import ActionCard from "$lib/components/action-card.svelte";
	import ActionCardItem from "$lib/components/action-card-item.svelte";

  import FileCodeOutline from "svelte-material-icons/FileCodeOutline.svelte";
  import FilePngBox from "svelte-material-icons/FilePngBox.svelte";
  import FileJpgBox from "svelte-material-icons/FileJpgBox.svelte";
	import StackView from "$lib/components/stack-view.svelte";

  let errorMessage = "";
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

  let svgDownloadUrl = "";
  let pngDownloadUrl = "";
  let jpgDownloadUrl = "";
  let webpDownloadUrl = "";

  function rebuildQr(...args) {
    key = {};
  }

  function onQrCodeGenerated() {
    errorMessage = "";
  }

  function onQrCodeGenerationFailed(e) {
    errorMessage = "Failed to generate the QR code (probably the data size is too large)."
  }

  function shouldJoinSvg() {
    // Joining the SVG means that fewer elements are used, reducing the size of the resulting file.
    // However it has a few constraints.

    // It cannot work if the modules and anchors are of a different color.
    if (modulesColor !== anchorsOuterColor || modulesColor !== anchorsInnerColor) {
      return false;
    }

    // It cannot work if shape is rounded.
    if (shape !== "square") {
      return false;
    }

    return true;
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
  <TwoColumnView leftTitle="QR code settings" rightTitle="QR code preview" hasPadding={false} mobileFillBehaviour="top">
    <div slot="left" class="fill-to-parent">
      <WarningBox message={errorMessage} />
      
      <StackView fill>
        <Card title="Data" noPadding>
          <TextArea bind:value={data} borderless />
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
          <div class="color-options">
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
      </StackView>

      <StackView title="Advanced settings" isExpanded={false} isCompact>
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

        <Card title="Type" thin>
          <input type="number" min="0" max="40" bind:value={typeNumber} />
        </Card>
      </StackView>
    </div>

    <div slot="right">
      <div class="preview">
        {#if data}
          {#key key}
            <QrCode {data}
              {width} {height} {padding}
              {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
              {typeNumber} {errorCorrectionLevel}
              {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
              isJoin={shouldJoinSvg()}
              dispatchDownloadUrl
              on:qrCodeGenerated={onQrCodeGenerated}
              on:qrCodeRegeneratedWithLogo={onQrCodeGenerated}
              on:qrCodeGenerationFailed={onQrCodeGenerationFailed}
              on:downloadUrlGenerated={(e) => svgDownloadUrl = e.detail.url}
            />
  
            <div class="hidden">
              <QrCode {data}
                {width} {height} {padding}
                {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
                {typeNumber} {errorCorrectionLevel}
                {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
                isJoin={shouldJoinSvg()}
                downloadUrlFileFormat="png"
                dispatchDownloadUrl
                on:downloadUrlGenerated={(e) => pngDownloadUrl = e.detail.url}
              />
  
              <QrCode {data}
                {width} {height} {padding}
                {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
                {typeNumber} {errorCorrectionLevel}
                {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
                isJoin={shouldJoinSvg()}
                downloadUrlFileFormat="jpg"
                dispatchDownloadUrl
                on:downloadUrlGenerated={(e) => jpgDownloadUrl = e.detail.url}
              />
  
              <QrCode {data}
                {width} {height} {padding}
                {shape} {haveBackgroundRoundedEdges} {haveGappedModules}
                {typeNumber} {errorCorrectionLevel}
                {backgroundColor} {modulesColor} {anchorsOuterColor} {anchorsInnerColor}
                isJoin={shouldJoinSvg()}
                downloadUrlFileFormat="webp"
                dispatchDownloadUrl
                on:downloadUrlGenerated={(e) => webpDownloadUrl = e.detail.url}
              />
            </div>
          {/key}
        {/if}
      </div>

      <div class="actions">
        <ActionCard title="Download the QR code" columns="always">
          {#if svgDownloadUrl}
            <ActionCardItem label="Download as SVG" href={svgDownloadUrl} icon={FileCodeOutline} download _target="blank" />
          {/if}
  
          {#if pngDownloadUrl}
            <ActionCardItem label="Download as PNG" href={pngDownloadUrl} icon={FilePngBox} download _target="blank" />
          {/if}
  
          {#if jpgDownloadUrl}
            <ActionCardItem label="Download as JPEG" href={jpgDownloadUrl} icon={FileJpgBox} download _target="blank" />
          {/if}
  
          {#if webpDownloadUrl}        
            <ActionCardItem label="Download as WebP" href={webpDownloadUrl} download _target="blank" />
          {/if}
        </ActionCard>
      </div>
    </div>
  </TwoColumnView>
</Tool>

<style>
  [slot="left"] {
    display: flex;
    flex-direction: column;
  }

  [slot="left"] :global(textarea) {
    min-height: 6em;
  }

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

  .color-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1em;
    align-items: end;
    text-align: center;
  }

  .color-options input[type="color"] {
    width: 100%;
  }

  .color-options :global(.wrapper) {
    margin-bottom: 0;
  }

  .preview {
    border-bottom: 1px solid var(--border-color);
    text-align: center;
  }

  .preview :global(svg) {
    display: inline-block;
  }

  .actions {
    padding: 1em;
  }
</style>