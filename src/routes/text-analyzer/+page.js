export function load() {

    return {
        textOperations: [
            sortAscending()
        ]
    }

}

function sortAscending() {
    return {
        label: "Sort lines in ascending order",
        run: (text) => {
            return text
                .split("\n")
                .sort()
                .join("\n");
        }
    }
}