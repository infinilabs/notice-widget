import {
  initNotice,
  setLang,
  setTheme,
  type NoticeData,
  type Lang,
  type LocaleFiles,
  type Theme,
  type NoticeInitOptions,
} from "./core/render";

const NoticeWidget = {
  init(options: NoticeInitOptions) {
    return initNotice(options);
  },
  setLang,
  setTheme,
};

if (typeof window !== "undefined") {
  (window as any).NoticeWidget = NoticeWidget;
}

export type { NoticeData, Lang, LocaleFiles, Theme, NoticeInitOptions };
export default NoticeWidget;
