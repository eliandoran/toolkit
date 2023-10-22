export default function generateKeyCheckExpression(e) {
    const lines = [];
    const isMeta = (e.ctrlKey || e.altKey || e.metaKey)

    // Normal key, check that meta keys are not pressed.        
    if (!isMeta) {
        lines.push(`const isMeta = (e.ctrlKey || e.altKey || e.metaKey);`)
        lines.push(`const isPressed = (key == "${e.key}")`);  
    } else {
        lines.push(`const isRightMeta = (${getMetaKeyCheckExpression(e)})`);
        lines.push(`const isPressed = (isRightMeta && key == "${e.key}")`);  
    }
    
    return lines.join("\n");
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