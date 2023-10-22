import { oneDark } from "@codemirror/theme-one-dark";
import { readable } from "svelte/store";

const defaultTheme = oneDark;
export const theme = readable(defaultTheme);