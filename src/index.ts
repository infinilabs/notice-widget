import { renderNotice, type Options } from "./core/render";

const NoticeWidget = {
  show(options?: Options) {
    renderNotice(options);
  },
};

if (typeof window !== "undefined") {
  (window as any).NoticeWidget = NoticeWidget;
}

export default NoticeWidget;
