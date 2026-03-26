import type { Locale, LocaleFiles, NoticeData } from "./types";

let localeFiles: LocaleFiles | null = null;
let localeCache: Partial<Record<Locale, NoticeData>> = {};
let currentLocale: Locale = "zh-CN";

export function getCurrentLocale(): Locale {
  return currentLocale;
}

export function hasLocales(): boolean {
  return localeFiles !== null;
}

export function initLocales(files: LocaleFiles, locale: Locale) {
  localeFiles = files;
  currentLocale = locale;
}

export function updateLocale(locale: Locale) {
  currentLocale = locale;
}

async function fetchLocale(url: string): Promise<NoticeData> {
  try {
    const response = await fetch(url);

    return response.json() as Promise<NoticeData>;
  } catch {
    throw new Error(`Failed to fetch locale data from: ${url}`);
  }
}

export async function getLocaleData(locale: Locale): Promise<NoticeData> {
  if (localeCache[locale]) {
    return localeCache[locale];
  }

  const url = localeFiles?.[locale];

  if (!url) {
    throw new Error(`No locale file for: ${locale}`);
  }

  const data = await fetchLocale(url);

  localeCache[locale] = data;

  return data;
}
