import SymmetricInputOutputTool from "$lib/model/symmetricInputOutputTool";

export default class Base64Tool extends SymmetricInputOutputTool {

    to(input: string): string {
        return btoa(input);
    }
    
}