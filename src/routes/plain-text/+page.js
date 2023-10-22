import SortAlphabeticalAscending from "svelte-material-icons/SortAlphabeticalAscending.svelte";
import SortAlphabeticalDescending from "svelte-material-icons/SortAlphabeticalDescending.svelte";
import Shuffle from "svelte-material-icons/Shuffle.svelte";
import SwapVertical from "svelte-material-icons/SwapVertical.svelte";
import FormatLetterCaseUpper from "svelte-material-icons/FormatLetterCaseUpper.svelte";
import FormatLetterCaseLower from "svelte-material-icons/FormatLetterCaseLower.svelte";

export function load() {

    return {
        textOperations: {
            "Line operations": [
                {
                    label: "Sort lines ascending",
                    run: (text) => text.split("\n").sort().join("\n"),
                    icon: SortAlphabeticalAscending
                },
    
                {
                    label: "Sort lines descending",
                    run: (text) => text.split("\n").sort().reverse().join("\n"),
                    icon: SortAlphabeticalDescending
                },
    
                {
                    label: "Shuffle lines",
                    run: (text) => shuffleArray(text.split("\n")).join("\n"),
                    icon: Shuffle
                },
    
                {
                    label: "Reverse lines",
                    run: (text) => text.split("\n").reverse().join("\n"),
                    icon: SwapVertical
                },                
    
                {
                    label: "Deduplicate lines",
                    run: deduplicateLines
                }                
            ],
            
            "Whitespace removal": [
                {
                    label: "Trim lines",
                    run: (text) => text.split("\n").map((line) => line.trim()).join("\n")
                },

                {
                    label: "Remove trailing whitespace",
                    run: removeTrailingWhitespace
                },

                {
                    label: "Remove blank lines",
                    run: removeBlankLines
                }
            ],

            "Convert text case": [
                {
                    label: "To upper case",
                    run: (text) => text.toUpperCase(),
                    icon: FormatLetterCaseUpper
                },
    
                {
                    label: "To lower case",
                    run: (text) => text.toLowerCase(),
                    icon: FormatLetterCaseLower
                }
            ]
        }
    }

}

function removeBlankLines(text) {
    return text.split("\n")
        .filter((line) => line.trim().length > 0)
        .join("\n");     
}

function removeTrailingWhitespace(text) {
    return text.split("\n")
        .map((line) => line.trimEnd())
        .join("\n")
        .trimEnd();
}

function deduplicateLines(text) {
    const lineSet = new Set();
    for (const line of text.split("\n")) {
        lineSet.add(line);
    }

    return Array.from(lineSet).join("\n");
}

/**
 * Shuffle/randomize the order of elements in an array using the
 * Durstenfeld Shuffle algorithm.
 * 
 * Source: https://stackoverflow.com/a/12646864
 * 
 * @param {Array} array the array to shuffle.
 * @returns the same array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
