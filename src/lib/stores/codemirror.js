import { oneDark } from "@codemirror/theme-one-dark";
import { readable } from "svelte/store";
import { browser } from "$app/environment";

function getDefaultTheme() {
    if (!browser) {
        return;
    }

    const prefersDark = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (prefersDark) {
        return oneDark;
    }
    
    return undefined;
}

const defaultTheme = getDefaultTheme();
export const theme = readable(defaultTheme);