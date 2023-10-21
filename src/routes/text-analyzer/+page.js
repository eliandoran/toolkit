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