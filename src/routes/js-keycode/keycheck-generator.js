const allCommandKeys = [
    "CapsLock",
    "ControlLeft", "ControlRight",
    "AltLeft", "AltRight",
    "ShiftLeft", "ShiftRight",
];

export function generateKeyCheckExpression(e) {
    const lines = [];
    const isMeta = (e.ctrlKey || e.altKey || e.metaKey);
    const isSingleCommandKey = (allCommandKeys.includes(e.code));

    if (isSingleCommandKey) {
        // Single command key is pressed (e.g. CtrlLeft).
        lines.push(`const isPressed = (e.code == "${e.code}");`);
    } else if (!isMeta) {
        // Normal key, check that meta keys are not pressed.            
        lines.push(`const isMeta = (e.ctrlKey || e.altKey || e.metaKey);`)
        lines.push(`const isPressed = (!isMeta && e.key == "${e.key}");`);  
    } else {
        const metaVariableName = getMetaKeyVariableName(e);
        lines.push(`const is${metaVariableName} = (${getMetaKeyCheckExpression(e)});`);
        lines.push(`const isPressed = (is${metaVariableName} && e.key == "${e.key}");`);  
    }
    
    return lines.join("\n");
}

function getMetaNames(e) {
    const meta = [];
    if (e.ctrlKey) meta.push("Ctrl");
    if (e.altKey) meta.push("Alt");
    if (e.metaName) meta.push("Meta");
    return meta;
}

export function getFriendlyKeyName(e) {
    return [
        ...getMetaNames(e),
        e.key
    ].join(" + ");
}

function getMetaKeyVariableName(e) {
    return getMetaNames(e).join("");
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