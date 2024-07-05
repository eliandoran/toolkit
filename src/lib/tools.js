import Ampersand from "svelte-material-icons/Ampersand.svelte";
import ClockOutline from "svelte-material-icons/ClockOutline.svelte";
import CodeJson from "svelte-material-icons/CodeJson.svelte";
import DotsHorizontal from "svelte-material-icons/DotsHorizontal.svelte";
import Equal from "svelte-material-icons/Equal.svelte";
import FileArrowLeftRightOutline from "svelte-material-icons/FileArrowLeftRightOutline.svelte";
import FileCheckOutline from "svelte-material-icons/FileCheckOutline.svelte";
import FileDocumentEditOutline from "svelte-material-icons/FileDocumentEditOutline.svelte";
import FileEyeOutline from "svelte-material-icons/FileEyeOutline.svelte";
import KeyboardSettingsOutline from "svelte-material-icons/KeyboardSettingsOutline.svelte";
import LanguageMarkdownOutline from "svelte-material-icons/LanguageMarkdownOutline.svelte";
import Numeric from "svelte-material-icons/Numeric.svelte"
import Numeric10BoxOutline from "svelte-material-icons/Numeric10BoxOutline.svelte";
import PercentBoxOutline from "svelte-material-icons/PercentBoxOutline.svelte";
import PercentOutline from "svelte-material-icons/PercentOutline.svelte";
import Pound from "svelte-material-icons/Pound.svelte";
import SlashForward from "svelte-material-icons/SlashForward.svelte";
import KeyOutline from "svelte-material-icons/KeyOutline.svelte";

export default {
    "Plain text": [
        {
            path: "/plain-text",
            title: "Text tools",
            icon: FileDocumentEditOutline
        },
    
        {
            path: "/text-hash",
            title: "Text hash",
            icon: Pound
        },
    
        {
            path: "/ansi-text",
            title: "ANSI text viewer",
            icon: FileEyeOutline
        },

        {
            path: "/html-markdown",
            title: "HTML to Markdown converter",
            icon: LanguageMarkdownOutline
        }        
    ],

    Arithmetics: [
        {
            path: "/base-converter",
            title: "Base converter",
            icon: Numeric
        },
        {
            path: "/percentage-calculator",
            title: "Percentage calculator",
            icon: PercentBoxOutline
        },
        {
            path: "/bitwise-calculator",
            title: "Bitwise calculator",
            icon: Numeric10BoxOutline
        }
    ],

    "Date & Time": [
        {
            path: "/unix-timestamp",
            title: "Unix timestamp",
            icon: ClockOutline
        }
    ],

    "JSON": [
        {
            path: "/json-formatter",
            title: "JSON formatter",
            icon: CodeJson
        },
        {
            path: "/json/yaml",
            title: "JSON to YAML",
            icon: FileArrowLeftRightOutline
        },
        {
            path: "/json/json5",
            title: "JSON to JSON5",
            icon: FileArrowLeftRightOutline
        },
        {
            path: "/json-schema",
            title: "JSON Schema Validator",
            icon: FileCheckOutline
        }
    ],

    "Encode/Decode": [
        {
            path: "/jwt-decoder",
            title: "JWT Decoder",
            icon: KeyOutline,
        },
        {
            path: "/base64",
            title: "Base64",
            icon: Equal
        },
        {
            path: "/url-encoder",
            title: "URL Encode",
            icon: PercentOutline
        },
        {
            path: "/html-entity",
            title: "HTML Entity",
            icon: Ampersand
        },
        {
            path: "/string-escape",
            title: "String escape",
            icon: SlashForward,
            iconFlipHorizontally: true
        },
        {
            path: "/php-serialization",
            title: "PHP serialization",
            icon: CodeJson           
        },
        {
            path: "/morse-code",
            title: "Morse code",
            icon: DotsHorizontal
        }
    ],

    "JavaScript": [
        {
            path: "/js-keycode",
            title: "JS keycodes",
            icon: KeyboardSettingsOutline        
        }
    ]
};