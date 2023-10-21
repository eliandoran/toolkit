import Tool from "$lib/model/tool";
import UnixTimestampComponent from "$lib/tools/unix-timestamp.svelte";

export default class UnixTimestamp extends Tool {

    constructor() {
        super({
            name: "Unix Timestamp",
            component: UnixTimestampComponent
        });
    }

}