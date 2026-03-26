import {
  initNotice,
  setLocale,
  setTheme,
  type NoticeData,
  type Locale,
  type LocaleFiles,
  type Theme,
  type NoticeInitOptions,
} from "./core/render";

const NoticeWidget = {
  init(options: NoticeInitOptions) {
    return initNotice(options);
  },
  setLocale,
  setTheme,
};

if (window != null) {
  (window as any).NoticeWidget = NoticeWidget;
}

export type { NoticeData, Locale, LocaleFiles, Theme, NoticeInitOptions };
export default NoticeWidget;
