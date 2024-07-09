import { get_unicode_by_decimal } from "unicode-information";
import he from "he";

const generalCategoryMappings = {
    Cc: {
        name: "Control",
        control: true
    },
    Cf: {
        name: "Format",
        control: true,
    },
    Co: {
        name: "Private Use",
        control: true,
    },
    Cs: {
        name: "Surrogate",
        control: true,
    },
    Ll: {
        name: "Lowercase Letter"
    },
    Lm: {
        name: "Modifier Letter"
    },
    Lo: {
        name: "Other Letter"
    },
    Lt: {
        name: "Titlecase Letter"
    },
    Lu: {
        name: "Uppercase Letter"
    },
    Mc: {
        name: "Spacing Mark",
        control: true
    },
    Me: {
        name: "Enclosing Mark",
        control: true
    },
    Mn: {
        name: "Nonspacing Mark",
        control: true,
    },
    Nd: {
        name: "Decimal Number"
    },
    Nl: {
        name: "Letter Number",
        control: true
    },
    No: {
        name: "Other Number",
        control: true
    },
    Pc: {
        name: "Connector Punctuation"
    },
    Pd: {
        name: "Dash Punctuation"
    },
    Pe: {
        name: "Close Punctuation"
    },
    Pf: {
        name: "Final Punctuation"
    },
    Pi: {
        name: "Initial Punctuation"
    },
    Po: {
        name: "Other Punctuation"
    },
    Ps: {
        name: "Open Punctuation"
    },
    Sc: {
        name: "Currency Symbol"
    },
    Sk: {
        name: "Modifier Symbol"
    },
    Sm: {
        name: "Math Symbol"
    },
    So: {
        name: "Other Symbol"
    },
    Zl: {
        name: "Line Separator",
        control: true
    },
    Zp: {
        name: "Paragraph Separator",
        control: true,
    },
    Zs: {
        name: "Space Character",
        control: true,
    }
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
        if (info) {
            this.#dataCodeLookup[code] = {
                cp: info.cp,            
                name: info.name,
                gc: generalCategoryMappings[info.gc]?.name || info.gc,
                blk: info.blk,
                htmlEntity: he.encode(ch, {
                    useNamedReferences: true
                })
            };
        }
                    
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
                    
        if (info && generalCategoryMappings[info.gc].control) {
            const unicodeHexValue = `U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
            return { symbol: unicodeHexValue }
        }

        // For printable characters, return them directly to avoid allocating another object.
        return ch;
    }

}