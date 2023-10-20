import SymmetricInputOutputTool from "$lib/model/symmetricInputOutputTool";

export default class JsonFormatter extends SymmetricInputOutputTool {

    constructor() {
        super({
            name: "JSON Formatter/Minifier",
            fromTitle: "Unformatted/Minified JSON",
            toTitle: "Formatted JSON"
        });
    }

    to(input: string) {
        return JSON.stringify(JSON.parse(input), null, 4);
    }

    from(input: string) {
        return JSON.stringify(JSON.parse(input));
    }

}