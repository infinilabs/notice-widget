export interface NoticeData {
  tag?: string;
  title?: string;
  closable?: boolean;
  logo?:
    | string
    | {
        light: string;
        dark: string;
      };
  button?: {
    label: string;
    url?: string;
  };
  menus?: Array<{
    label: string;
    url: string;
  }>;
  dropdownMenus?: Array<{
    label: string;
    description: string;
    url: string;
  }>;
}

export type Locale = "zh-CN" | "en-US";
export type Theme = "light" | "dark";

export type LocaleFiles = Record<Locale, string>;

export interface ThemeVars {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  textHoverColor?: string;
  tag?: {
    textColor?: string;
    bgColor?: string;
  };
  button?: {
    textColor?: string;
    bgColor?: string;
  };
  divider?: {
    color?: string;
  };
  dropdownMenuIcon?: {
    color?: string;
    hoverColor?: string;
  };
  closeIcon?: {
    color?: string;
    hoverColor?: string;
  };
  dropdownMenu?: {
    titleColor?: string;
    descriptionColor?: string;
    bgColor?: string;
    borderColor?: string;
    arrowIconColor?: string;
  };
}

export interface NoticeInitOptions {
  locales: LocaleFiles;
  locale?: Locale;
  theme?: Theme;
  themes?: {
    light?: ThemeVars;
    dark?: ThemeVars;
  };
}
