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
import TextLong from "svelte-material-icons/TextLong.svelte";
import Unicode from "svelte-material-icons/Unicode.svelte";
import Svg from "svelte-material-icons/Svg.svelte";
import LanguageHtml5 from "svelte-material-icons/LanguageHtml5.svelte";
import Qrcode from "svelte-material-icons/Qrcode.svelte";
import FileDelimitedOutline from "svelte-material-icons/FileDelimitedOutline.svelte";
import Thermometer from "svelte-material-icons/Thermometer.svelte";
import Sd from "svelte-material-icons/Sd.svelte";
import Weight from "svelte-material-icons/Weight.svelte";
import Hexadecimal from "svelte-material-icons/Hexadecimal.svelte";
import CubeOutline from "svelte-material-icons/CubeOutline.svelte";
import LightningBolt from "svelte-material-icons/LightningBolt.svelte";
import FileSearchOutline from "svelte-material-icons/FileSearchOutline.svelte";

export default {
    "Plain text": [
        {
            path: "/plain-text",
            title: "Text Tools",
            icon: FileDocumentEditOutline
        },
    
        {
            path: "/text-hash",
            title: "Text Hash",
            icon: Pound
        },
    
        {
            path: "/ansi-text",
            title: "ANSI Text Viewer",
            icon: FileEyeOutline
        },

        {
            path: "/html-markdown",
            title: "HTML to Markdown",
            icon: LanguageMarkdownOutline
        },

        {
            path: "/text-lorem-ipsum",
            title: "Lorem Ipsum Generator",
            icon: TextLong
        },
        {
            path: "/unicode-analyzer",
            title: "Analyze Unicode text",
            icon: Unicode
        }
    ],

    Arithmetics: [
        {
            path: "/base-converter",
            title: "Base Converter",
            icon: Numeric
        },
        {
            path: "/percentage-calculator",
            title: "Percentage Calculator",
            icon: PercentBoxOutline
        },
        {
            path: "/bitwise-calculator",
            title: "Bitwise Calculator",
            icon: Numeric10BoxOutline
        }
    ],

    "Unit conversion": [
        {
            path: "/unit-conversion/data",
            title: "Data",
            icon: Sd
        },
        {
            path: "/unit-conversion/temperature",
            title: "Temperature",
            icon: Thermometer
        },
        {
            path: "/unit-conversion/weight",
            title: "Weight",
            icon: Weight
        },
        {
            path: "/unit-conversion/volume",
            title: "Volume",
            icon: CubeOutline
        },
        {
            path: "/unit-conversion/energy",
            title: "Energy",
            icon: LightningBolt
        }
    ],

    "Date & Time": [
        {
            path: "/unix-timestamp",
            title: "Unix Timestamp",
            icon: ClockOutline
        }
    ],

    "HTML": [
        {
            path: "/html-sandbox",
            title: "HTML Sandbox",
            icon: LanguageHtml5
        }
    ],

    "JSON": [
        {
            path: "/json-formatter",
            title: "JSON Formatter",
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
            path: "/json/csv",
            title: "JSON to CSV",
            icon: FileDelimitedOutline
        },
        {
            path: "/json-schema",
            title: "JSON Schema Validator",
            icon: FileCheckOutline
        },
        {
            path: "/json/jsonata",
            title: "JSONata",
            icon: FileSearchOutline
        },
        {
            path: "/json/php-serialization",
            title: "JSON to PHP Serialization",
            icon: CodeJson           
        },
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
            title: "String Escape",
            icon: SlashForward,
            iconFlipHorizontally: true
        },
        {
            path: "/encoding/text-to-hex",
            title: "Text to Hex",
            icon: Hexadecimal
        },
        {
            path: "/morse-code",
            title: "Morse Code",
            icon: DotsHorizontal
        },
        {
            path: "/svg-to-data",
            title: "SVG to Data URL",
            icon: Svg
        },
        {
            path: "/qr-generator",
            title: "QR Code Generator",
            icon: Qrcode
        }
    ],

    "JavaScript": [
        {
            path: "/js-keycode",
            title: "JS Keycodes",
            icon: KeyboardSettingsOutline        
        }
    ]
};