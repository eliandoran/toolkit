import type { ComponentType, SvelteComponent } from "svelte";

export interface ToolConfiguration {

    /** A name identifying this tool, displayed to the user in the navigation and in the titles. */
    name: string;

    /** Optional title to be displayed in the input box. */
    fromTitle?: string;

    /** Optional title to be displayed in the output box. */
    toTitle?: string;

    /** Controls whether spellcheck should be enabled in the input/output box (disabled by default). */
    // TODO: Unused
    allowSpellChecking?: boolean;

    component: ComponentType;

}

export default abstract class Tool {

    config: ToolConfiguration;

    constructor(config: ToolConfiguration) {
        this.config = config;
    }

}