import { flattenObject, kebabCase } from "es-toolkit";

import type { Theme, ThemeVars, NoticeInitOptions } from "./types";

let currentTheme: Theme = "light";
let currentThemes: NoticeInitOptions["themes"] | undefined;

export function getCurrentTheme(): Theme {
  return currentTheme;
}

export function getThemeClass(): string {
  return currentTheme === "dark" ? "nw-theme-dark" : "nw-theme-light";
}

export function getCurrentThemeVars(): ThemeVars | undefined {
  return currentTheme === "dark" ? currentThemes?.dark : currentThemes?.light;
}

export function initTheme(theme: Theme, themes?: NoticeInitOptions["themes"]) {
  currentTheme = theme;
  currentThemes = themes;
}

export function updateTheme(theme: Theme) {
  currentTheme = theme;
}

export function applyThemeVars(element: Element, vars?: ThemeVars) {
  if (!vars) return;

  const flat = flattenObject(vars);
  const el = element as HTMLElement;

  for (const [key, value] of Object.entries(flat)) {
    if (value) {
      el.style.setProperty(`--${kebabCase(key)}`, value);
    }
  }
}
