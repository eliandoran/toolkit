import SymmetricInputOutputTool from "$lib/model/symmetricInputOutputTool";

export default class UrlEncodeDecode extends SymmetricInputOutputTool {

    constructor() {
        super({
            name: "URL Encoder/Decoder",
            fromTitle: "URL Encode",
            toTitle: "URL Decode"
        });
    }

    to(input: string) {
        return encodeURI(input);
    }

    from(input: string) {
        return decodeURI(input);
    }

}