<script>
	import TwoColumnView from "$lib/components/two-column-view.svelte";

    const defaultValue = new Date().toISOString().split("T");
    let inputDate = defaultValue[0];
    let outputTimestampMillis;
    
    let inputTime = defaultValue[1].split(":");
    let hours = inputTime[0];
    let minutes = inputTime[1];
    let seconds = inputTime[2].split(".")[0];

    console.log(inputTime);
    $: {
        const dateString = `${inputDate}T${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}Z`;
        const date = new Date(dateString);
        console.log(dateString, date);
        outputTimestampMillis = date.getTime();
    }

    function pad2(value) {
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }
</script>

<TwoColumnView
    leftTitle="Input date"
    rightTitle="Unix timestamp">
    <div slot="left">
        <div>
            <label>Date</label>
            <input type="date" bind:value={inputDate} />
        </div>

        <div>
            <label>Hours</label>
            <input type="number" bind:value={hours} />

            <label>Minute</label>
            <input type="number" bind:value={minutes} />

            <label>Seconds</label>
            <input type="number" bind:value={seconds} />
        </div>
    </div>

    <div slot="right">
        <input type="number" bind:value={outputTimestampMillis} />
    </div>
</TwoColumnView>