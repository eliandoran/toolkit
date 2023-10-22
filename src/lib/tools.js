import { BxCalculator, BxColor, BxFile, BxHash, BxLink, BxListCheck, BxTimer, BxsFileExport, BxsFileJson } from "svelte-boxicons";

export default {
    "Plain text": [
        {
            path: "/plain-text",
            title: "Text tools",
            icon: BxFile
        },
    
        {
            path: "/text-hash",
            title: "Text hash",
            icon: BxHash
        },
    
        {
            path: "/ansi-text",
            title: "ANSI text viewer",
            icon: BxColor
        }
    ],

    Arithmetics: [
        {
            path: "/percentage-calculator",
            title: "Percentage calculator",
            icon: BxCalculator
        }
    ],

    "Date & Time": [
        {
            path: "/unix-timestamp",
            title: "Unix timestamp",
            icon: BxTimer
        }
    ],

    "JSON": [
        {
            path: "/json-formatter",
            title: "JSON formatter",
            icon: BxsFileJson
        },
        {
            path: "/json-converter",
            title: "JSON to YAML",
            icon: BxsFileExport
        },
        {
            path: "/json-schema",
            title: "JSON Schema Validator",
            icon: BxListCheck
        }
    ],

    "Encode/Decode": [
        {
            path: "/base64",
            title: "Base64"
        },
        {
            path: "/url-encoder",
            title: "URL Encode",
            icon: BxLink
        },
        {
            path: "/html-entity",
            title: "HTML Entity"
        }
    ]    
};