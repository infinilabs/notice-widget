import {
  initNotice,
  setLang,
  type NoticeData,
  type Lang,
  type LocaleFiles,
} from "./core/render";

const NoticeWidget = {
  init(locales: LocaleFiles, lang: Lang = "zh-CN") {
    return initNotice(locales, lang);
  },
  setLang,
};

if (typeof window !== "undefined") {
  (window as any).NoticeWidget = NoticeWidget;
}

export type { NoticeData, Lang, LocaleFiles };
export default NoticeWidget;
