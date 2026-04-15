export interface NoticeData {
  tag?: string;
  title?: {
    label: string;
    url?: string;
  };
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
  /**
   * 若页面存在 position:fixed 元素与通知栏重叠，开启此项后通知栏将挂载到
   * \<html\> 并对 \<body\> 施加 transform，使其内部所有 fixed 元素失去视口固定效果。
   */
  neutralizeFixed?: boolean;
}
