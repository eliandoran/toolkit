export default function generateKeyCheckExpression(e) {
    const lines = [];
    const isMeta = (e.ctrlKey || e.altKey || e.metaKey)

    // Normal key, check that meta keys are not pressed.        
    if (!isMeta) {
        lines.push(`const isMeta = (e.ctrlKey || e.altKey || e.metaKey);`)
        lines.push(`const isPressed = (key == "${e.key}")`);  
    } else if (e.ctrlKey && !e.altKey && !e.metaKey) {
        lines.push(`const isCtrl = (e.ctrlKey && !e.altKey && !e.metaKey)`);
        lines.push(`const isPressed = (isCtrl && key == "${e.key}")`);  
    } else if (!e.ctrlKey && e.altKey && !e.metaKey) {
        lines.push(`const isAlt = (!e.ctrlKey && e.altKey && !e.metaKey)`);
        lines.push(`const isPressed = (isAlt && key == "${e.key}")`);  
    } else if (!e.ctrlKey && !e.altKey && e.metaKey) {
        lines.push(`const isMeta = (!e.ctrlKey && !e.altKey && e.metaKey)`);
        lines.push(`const isPressed = (isMeta && key == "${e.key}")`);  
    }

    return lines.join("\n");
}