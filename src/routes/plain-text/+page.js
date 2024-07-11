import SortAlphabeticalAscending from "svelte-material-icons/SortAlphabeticalAscending.svelte";
import SortAlphabeticalDescending from "svelte-material-icons/SortAlphabeticalDescending.svelte";
import Shuffle from "svelte-material-icons/Shuffle.svelte";
import SwapVertical from "svelte-material-icons/SwapVertical.svelte";
import FormatLetterCaseUpper from "svelte-material-icons/FormatLetterCaseUpper.svelte";
import FormatLetterCaseLower from "svelte-material-icons/FormatLetterCaseLower.svelte";
import FormatLetterCase from "svelte-material-icons/FormatLetterCase.svelte";
import TildeOff from "svelte-material-icons/TildeOff.svelte";
import PlaylistRemove from "svelte-material-icons/PlaylistRemove.svelte";
import FormatHorizontalAlignCenter from "svelte-material-icons/FormatHorizontalAlignCenter.svelte";
import AlignHorizontalRight from "svelte-material-icons/AlignHorizontalRight.svelte";
import FormatAlignMiddle from "svelte-material-icons/FormatAlignMiddle.svelte";
import AlignHorizontalLeft from "svelte-material-icons/AlignHorizontalLeft.svelte";
import FormatHeader1 from "svelte-material-icons/FormatHeader1.svelte";

import { normalizeSync } from 'normalize-diacritics';
import { titleCase, sentenceCase } from "true-case";

export function load() {

    return {
        textOperations: {
            "Line operations": {            
                operations: [
                    {
                        label: "Sort ascending",
                        run: (text) => text.split("\n").sort().join("\n"),
                        icon: SortAlphabeticalAscending,
                        description: "Sorts all lines alphabetically, from A to Z."
                    },
        
                    {
                        label: "Sort descending",
                        run: (text) => text.split("\n").sort().reverse().join("\n"),
                        icon: SortAlphabeticalDescending,
                        description: "Sorts all lines alphabetically, from Z to A."
                    },
        
                    {
                        label: "Shuffle lines",
                        run: (text) => shuffleArray(text.split("\n")).join("\n"),
                        icon: Shuffle,
                        description: "Randomizes the order of all the lines."
                    },
        
                    {
                        label: "Reverse line order",
                        run: (text) => text.split("\n").reverse().join("\n"),
                        icon: SwapVertical,
                        description: "Reverses the order of all the lines (i.e. the last one becomes the first and so on)."
                    },                
        
                    {
                        label: "Deduplicate lines",
                        run: deduplicateLines,
                        icon: PlaylistRemove,
                        description: "Removes all duplicate lines, keeping one line of each."
                    }                
                ]
            },
            
            "Line removal": {
                columns: "always",
                operations: [
                    {
                        label: "Trim leading",
                        run: removeLeadingWhitespace,
                        icon: AlignHorizontalLeft,
                        description: "Remove spaces at the beginning of each line."
                    },
    
                    {
                        label: "Trim trailing",
                        run: removeTrailingWhitespace,
                        icon: AlignHorizontalRight,
                        description: "Remove spaces at the end of each line."
                    },
    
                    {
                        label: "Trim both",
                        run: (text) => text.split("\n").map((line) => line.trim()).join("\n"),
                        icon: FormatHorizontalAlignCenter,
                        description: "Removes spaces at the beginning or end of each line."
                    },
    
                    {
                        label: "Remove blank lines",
                        run: removeBlankLines,
                        icon: FormatAlignMiddle,
                        description: "Removes all blank lines, including those that are made only of spaces."
                    }            
                ]
            },

            "Convert text case": {
                columns: "always",
                operations: [
                    {
                        label: "To upper",
                        run: (text) => text.toUpperCase(),
                        icon: FormatLetterCaseUpper,
                        description: "Turns all letters into upper case."
                    },
        
                    {
                        label: "To lower",
                        run: (text) => text.toLowerCase(),
                        icon: FormatLetterCaseLower,
                        description: "Turns all letters into lower case."
                    },
    
                    {
                        label: "To sentence",
                        run: (text) => sentenceCase(text),
                        icon: FormatLetterCase,
                        description: "All letters are lower case, except for the first word in each sentence."
                    },
    
                    {
                        label: "To title",
                        run: (text) => titleCase(text),
                        icon: FormatHeader1,
                        description: "Every word has a capital first letter, with some English-specific exceptions (e.g. \"the\")."
                    }
                ]
            },

            "Unicode": {
                operations: [
                    {
                        label: "Remove diacritics",
                        run: (text) => normalizeSync(text),
                        icon: TildeOff,
                        description: "Removes accent marks and diacritics from the text."
                    }
                ]
            }
        }
    }

}

function removeBlankLines(text) {
    return text.split("\n")
        .filter((line) => line.trim().length > 0)
        .join("\n");     
}

function removeLeadingWhitespace(text) {
    return text.split("\n")
        .map((line) => line.trimStart())
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
