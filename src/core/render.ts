import { html } from "uhtml";

import { getShadowRoot } from "./mount";
import styles from "../styles/base.scss?inline";
import { toStyle } from "./utils";
import { renderTag } from "../components/tag";
import { renderTitle } from "../components/title";
import { renderButton } from "../components/button";
import { renderMenus } from "../components/menus";
import { renderLogo } from "../components/logo";
import { DropdownIcon, renderDropdownMenus } from "../components/dropdown";
import { renderCloseIcon } from "../components/close-icon";

export interface NoticeData {
  color?: string;
  background?: string;
  title?: string;
  logo?: string;
  closable?: boolean;
  tag?: {
    label: string;
    color?: string;
    background?: string;
  };
  button?: {
    label: string;
    color?: string;
    background?: string;
    url?: string;
  };
  menus?: Array<{
    label: string;
    url: string;
  }>;
  dropdownIcon?: {
    color?: string;
  };
  dropdownMenus?: Array<{
    label: string;
    description: string;
    url: string;
  }>;
  divider?: {
    background?: string;
  };
  closeIcon?: {
    color?: string;
  };
}

export type Lang = "zh-CN" | "en-US";

export type LocaleFiles = Record<Lang, string>;

let localeFiles: LocaleFiles | null = null;
let localeCache: Partial<Record<Lang, NoticeData>> = {};
let currentLang: Lang = "zh-CN";

async function fetchLocale(url: string): Promise<NoticeData> {
  try {
    const response = await fetch(url);

    return response.json() as Promise<NoticeData>;
  } catch {
    throw new Error(`Failed to fetch locale data from: ${url}`);
  }
}

async function getLocaleData(lang: Lang): Promise<NoticeData> {
  if (localeCache[lang]) {
    return localeCache[lang];
  }

  const url = localeFiles?.[lang];

  if (!url) {
    throw new Error(`No locale file for: ${lang}`);
  }

  const data = await fetchLocale(url);

  localeCache[lang] = data;

  return data;
}

export async function initNotice(files: LocaleFiles, lang: Lang = "zh-CN") {
  localeFiles = files;
  currentLang = lang;

  const data = await getLocaleData(currentLang);

  render(data);
}

export async function setLang(lang: Lang) {
  if (!localeFiles || currentLang === lang) return;

  currentLang = lang;

  const data = await getLocaleData(currentLang);

  render(data);
}

function render(data: NoticeData) {
  const shadow = getShadowRoot();

  if (!shadow.querySelector("style")) {
    const style = document.createElement("style");

    style.textContent = styles;

    shadow.append(style);
  }

  const prevBanner = shadow.querySelector(".nw-banner");

  if (prevBanner) {
    prevBanner.remove();
  }

  const { color, background } = data;

  const el = html`
    <div class="nw-banner" style=${toStyle({ color, background })}>
      <div class="nw-body">
        <div class="nw-content">
          ${renderTag(data)} ${renderTitle(data)} ${renderButton(data)}
        </div>

        <div class="nw-actions">
          ${renderMenus(data)} ${renderLogo(data)}
          ${html`<${DropdownIcon} ...${data} />`} ${renderCloseIcon(data)}
        </div>
      </div>

      ${renderDropdownMenus(data)}
    </div>
  `;

  shadow.append(el as Node);
}
