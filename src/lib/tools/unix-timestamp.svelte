<script>
	import InputField from "$lib/components/input-field.svelte";
import TwoColumnView from "$lib/components/two-column-view.svelte";

    const defaultValue = new Date().toISOString().split("T");
    let inputDate = defaultValue[0];
    let outputTimestampMillis;
    
    let inputTime = defaultValue[1].split(":");
    let hours = inputTime[0];
    let minutes = inputTime[1];
    let seconds = inputTime[2].split(".")[0];

    $: {
        const dateString = `${inputDate}T${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}Z`;
        const date = new Date(dateString);
        console.log(dateString, date);
        outputTimestampMillis = date.getTime();
    }

    function pad2(value) {
        value = parseInt(value, 10);
        if (value < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }
</script>

<TwoColumnView>
    <div slot="left">
        <InputField label="Date">
            <input type="date" bind:value={inputDate} />
        </InputField>

        <div class="time-fields">
            <InputField label="Hours">
                <input type="number" bind:value={hours} />
            </InputField>

            <InputField label="Minutes">
                <input type="number" bind:value={minutes} />
            </InputField>

            <InputField label="Seconds">
                <input type="number" bind:value={seconds} />
            </InputField>
        </div>
    </div>

    <div slot="right">
        <InputField label="Unix timestamp (milliseconds)">
            <input type="number" bind:value={outputTimestampMillis} />
        </InputField>
    </div>
</TwoColumnView>

<style>
    .time-fields {
        display: flex;
    }

    .time-fields input {
        width: 60px;
    }
</style>