export function load() {

    return {
        textOperations: [
            {
                label: "Sort lines in ascending order",
                run: (text) => text.split("\n").sort().join("\n")
            },

            {
                label: "Sort lines in descending order",
                run: (text) => text.split("\n").sort().reverse().join("\n")
            },

            {
                label: "Shuffle lines",
                run: (text) => shuffleArray(text.split("\n")).join("\n")
            },

            {
                label: "Reverse lines",
                run: (text) => text.split("\n").reverse().join("\n")
            },

            {
                label: "Trim lines",
                run: (text) => text.split("\n").map((line) => line.trim()).join("\n")
            },

            {
                label: "Deduplicate lines",
                run: deduplicateLines
            },

            {
                label: "Remove trailing whitespace",
                run: removeTrailingWhitespace
            },

            {
                label: "To upper case",
                run: (text) => text.toUpperCase()
            },

            {
                label: "To lower case",
                run: (text) => text.toLowerCase()
            }
        ]
    }

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