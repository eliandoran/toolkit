import SymmetricInputOutputTool from "$lib/model/symmetricInputOutputTool";

export default class UrlEncodeDecode extends SymmetricInputOutputTool {

    constructor() {
        super({
            name: "URL Encoder/Decoder"
        });
    }

    to(input: string) {
        return encodeURI(input);
    }

    from(input: string) {
        return decodeURI(input);
    }

}