export interface ToolConfiguration {

    /** A name identifying this tool, displayed to the user in the navigation and in the titles. */
    name: string;

}

export default abstract class Tool {

    /** A name identifying this tool, displayed to the user in the navigation and in the titles. */
    name: string;

    constructor(config: ToolConfiguration) {
        this.name = config.name;
    }

}