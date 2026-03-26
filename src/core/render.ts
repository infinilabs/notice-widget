import { html } from "uhtml";

import { getShadowRoot } from "./mount";
import styles from "../styles/base.scss?inline";
import { renderTag } from "../components/tag";
import { renderTitle } from "../components/title";
import { renderButton } from "../components/button";
import { renderMenus } from "../components/menus";
import { renderLogo } from "../components/logo";
import { DropdownIcon, renderDropdownMenus } from "../components/dropdown";
import { renderCloseIcon } from "../components/close-icon";
import {
  initLocales,
  updateLocale,
  hasLocales,
  getCurrentLocale,
  getLocaleData,
} from "./locale";
import {
  initTheme,
  updateTheme,
  getThemeClass,
  getCurrentThemeVars,
  applyThemeVars,
  getCurrentTheme,
} from "./theme";

export type {
  NoticeData,
  Locale,
  Theme,
  LocaleFiles,
  ThemeVars,
  NoticeInitOptions,
} from "./types";
import type { NoticeData, Locale, Theme, NoticeInitOptions } from "./types";

let currentData: NoticeData | null = null;

function render(data: NoticeData) {
  currentData = data;

  const shadow = getShadowRoot();

  if (!shadow.querySelector("style")) {
    const style = document.createElement("style");

    style.textContent = styles;

    shadow.append(style);
  }

  const prevBannerElement = shadow.querySelector(".nw-banner");

  if (prevBannerElement) {
    prevBannerElement.remove();
  }

  const el = html`
    <div class=${`nw-banner ${getThemeClass()}`}>
      <div class="nw-body">
        <div class="nw-content">
          ${renderTag(data)} ${renderTitle(data)} ${renderButton(data)}
        </div>

        <div class="nw-actions">
          ${renderMenus(data)} ${renderLogo(getCurrentTheme(), data)}
          ${html`<${DropdownIcon} ...${data} />`} ${renderCloseIcon(data)}
        </div>
      </div>

      ${renderDropdownMenus(data)}
    </div>
  `;

  shadow.append(el as Node);

  const bannerElement = shadow.querySelector(".nw-banner");

  if (bannerElement) {
    applyThemeVars(bannerElement, getCurrentThemeVars());
  }
}

export async function initNotice(options: NoticeInitOptions) {
  const { locales, locale = "zh-CN", theme = "light", themes } = options;

  initLocales(locales, locale);
  initTheme(theme, themes);

  const data = await getLocaleData(locale);

  render(data);
}

export async function setLocale(locale: Locale) {
  if (!hasLocales() || getCurrentLocale() === locale) return;

  updateLocale(locale);

  const data = await getLocaleData(locale);

  render(data);
}

export function setTheme(theme: Theme) {
  if (getCurrentTheme() === theme) return;

  updateTheme(theme);

  if (currentData) {
    render(currentData);
  }
}
