import Tool, { type ToolConfiguration } from "./tool";

export default abstract class SymmetricInputOutputTool extends Tool {

    constructor(config: ToolConfiguration) {
        super(config);
    }

    abstract to(input: string): string;

    abstract from(input: string): string;

}