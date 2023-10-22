<script>
	import InputField from "$lib/components/input-field.svelte";
	import Tool from "$lib/components/tool.svelte";
    import TwoColumnView from "$lib/components/two-column-view.svelte";
	import Card from "../../lib/components/card.svelte";

    let inputDate;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    let outputTimestampMillis;

    $: {
        const dateString = `${inputDate}T${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}Z`;
        const date = new Date(dateString);
        outputTimestampMillis = date.getTime();
    }

    function setInput(date) {
        const dateComponents = date.toISOString().split("T");
        inputDate = dateComponents[0];

        let inputTime = dateComponents[1].split(":");
        hours = inputTime[0];
        minutes = inputTime[1];
        seconds = inputTime[2].split(".")[0];
    }

    function pad2(value) {
        value = parseInt(value, 10);
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }

    function onOutputChanged(e) {
        const timestamp = parseInt(e.target.value, 10);

        let date;
        try {
            date = new Date(timestamp);
            setInput(date);
        } catch (e) {
            console.log("Invalid timestamp.", timestamp, date);
            return;
        }
    }

    // Set default value.
    const defaultValue = new Date();
    setInput(defaultValue);
</script>

<Tool>
    <TwoColumnView leftTitle="Date & time" rightTitle="Timestamp">
        <div slot="left">
            <Card>
                <InputField label="Date">
                    <input type="date" bind:value={inputDate} />
                </InputField>
    
                <div class="time-fields">
                    <InputField label="Hours">
                        <input type="number" bind:value={hours} min="0" max="23" />
                    </InputField>
    
                    <InputField label="Minutes">
                        <input type="number" bind:value={minutes} min="0" max="59" />
                    </InputField>
    
                    <InputField label="Seconds">
                        <input type="number" bind:value={seconds} min="0" max="59" />
                    </InputField>
                </div>
            </Card>
        </div>

        <div slot="right">
            <Card>
                <InputField label="Unix timestamp (milliseconds)">
                    <input type="number"
                        value={outputTimestampMillis}
                        on:input={onOutputChanged} />
                </InputField>
            </Card>
        </div>
    </TwoColumnView>
</Tool>

<style>
    .time-fields {
        display: flex;
    }

    .time-fields input {
        width: 60px;
    }
</style>