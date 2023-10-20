import SymmetricInputOutputTool from "$lib/model/symmetricInputOutputTool";

export default class Base64Tool extends SymmetricInputOutputTool {

    constructor() {
        super({
            name: "Base64 Encoder/Decoder",
            fromTitle: "Encode to Base64",
            toTitle: "Decode from Base64"
        });
    }

    to(input: string): string {
        return btoa(input);
    }

    from(input: string): string {
        return atob(input);
    }
    
}