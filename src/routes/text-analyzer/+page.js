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
            }
        ]
    }

}