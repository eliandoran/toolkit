import { get_unicode_by_decimal } from "unicode-information";
import he from "he";

const generalCategoryMappings = {
    Cc: true,
    Cf: true,
    Co: true,
    Cs: true,
    Ll: false,
    Lm: false,
    Lo: false,
    Lt: false,
    Lu: false,
    Mc: true,
    Me: true,
    Mn: true,
    Nd: false,
    Nl: true,
    No: true,
    Pc: false,
    Pd: false,
    Pe: false,
    Pf: false,
    Pi: false,
    Po: false,
    Ps: false,
    Sc: false,
    Sk: false,
    Sm: false,
    So: false,
    Zl: true,
    Zp: true,
    Zs: true
};

export class UnicodeAnalyzer {

    #characterCache = {};
    #dataCodeLookup = {};

    mapCharacter(ch) {
        const code = ch.charCodeAt(0);

        // Try to use cached data if the character was already encountered.
        if (this.#characterCache[code]) {
            return this.#characterCache[code];
        }

        const info = get_unicode_by_decimal(ch.charCodeAt(0))
        info.htmlEntity = he.encode(ch, {
            useNamedReferences: true
        });
        this.#dataCodeLookup[code] = info;
                    
        const builtData = this.#buildNewCharacter(ch, info);        
        if (typeof builtData === "object") {
            // Inject the charcode for lookups.
            builtData.code = code;
        }

        this.#characterCache[code] = builtData;
        return builtData;
    }

    getDataByCode(code) {
        return this.#dataCodeLookup[code];
    }

    #buildNewCharacter(ch, info) {
        switch (ch) {
            case "\0":
                return { symbol: "NULL" }
            case "\u0007":
                return { symbol: "BELL" }
            case "\t":
                return { symbol: "TAB" }
            case "\v":
                return { symbol: "VERTICAL TAB" }
            case "\r":
                return { symbol: "CR", insertAfter: "\r" }
            case "\b":
                return { symbol: "BACKSPACE" }
            case "\n":
                return { symbol: "LF", insertAfter: "\n" }
            case "\f":
                return { symbol: "FORM FEED" }
            case " ":
                return { symbol: "␣", noBackground: true }
            }
                    
        if (info && generalCategoryMappings[info.gc]) {
            const unicodeHexValue = `U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
            return { symbol: unicodeHexValue }
        }

        // For printable characters, return them directly to avoid allocating another object.
        return ch;
    }

}