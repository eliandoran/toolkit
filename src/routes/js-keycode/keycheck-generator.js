export default function generateKeyCheckExpression(e) {
    const lines = [];
    const isMeta = (e.ctrlKey || e.altKey || e.metaKey)

    // Normal key, check that meta keys are not pressed.        
    if (!isMeta) {
        lines.push(`const isMeta = (e.ctrlKey || e.altKey || e.metaKey);`)
        lines.push(`const isPressed = (!isMeta && key == "${e.key}")`);  
    } else {
        const metaVariableName = getMetaKeyVariableName(e);
        lines.push(`const is${metaVariableName} = (${getMetaKeyCheckExpression(e)})`);
        lines.push(`const isPressed = (is${metaVariableName} && key == "${e.key}")`);  
    }
    
    return lines.join("\n");
}

function getMetaKeyVariableName(e) {
    const names = [];
    if (e.ctrlKey) names.push("Ctrl");
    if (e.altKey) names.push("Alt");
    if (e.metaKey) names.push("Meta");
    return names.join("");
}

function getMetaKeyCheckExpression(e) {
    return [
        negateIfFalse("e.ctrlKey", e.ctrlKey),
        negateIfFalse("e.altKey", e.altKey),
        negateIfFalse("e.metaKey", e.metaKey)
    ].join(" && ");
}

function negateIfFalse(expr, boolean) {
    if (boolean) {
        return expr;
    } else {
        return "!" + expr;
    }
}