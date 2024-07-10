<script>
  import convert from "convert";

	import Tool from "$lib/components/tool.svelte";
	import InputField from "$lib/components/input-field.svelte";
	import OneColumnView from "$lib/components/one-column-view.svelte";

  let celsius = 30;
  let fahrenheit;

  function update(celsius) {
    fahrenheit = convert(celsius, "celsius").to("fahrenheit");
  }

  $: update(celsius);
</script>

<Tool>
  <OneColumnView title="Temperature Conversion">
    <InputField label="Degrees Celsius">
      <input type="number" bind:value={celsius} />   
    </InputField>

    <InputField label="Degrees Fahrenheit">
      <input type="number" bind:value={fahrenheit} />   
    </InputField>
  </OneColumnView>
</Tool>