<script>
  import CodeMirror from "svelte-codemirror-editor";
  import { html } from "@codemirror/lang-html";
  import { theme } from "$lib/stores/codemirror.js";

	import Tool from "$lib/components/tool.svelte";
	import TwoColumnView from "$lib/components/two-column-view.svelte";

  let htmlText;
</script>

<Tool>
  <TwoColumnView leftTitle="HTML" rightTitle="Preview" hasPadding={false}>
    <div slot="left">
      <div class="codemirror-outer-wrapper">
        <CodeMirror
          bind:value={htmlText}
          lang={html()}
          theme={$theme} />
      </div>
    </div>

    <div slot="right">
      {@html htmlText}
    </div>
  </TwoColumnView>
</Tool>

<style>
  [slot=left],
  [slot=right] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .codemirror-outer-wrapper {
    height: 100%;
  }
</style>