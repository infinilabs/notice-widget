import { html } from "uhtml";

import type { NoticeData } from "../core/render";

export function renderTitle(data?: NoticeData) {
  const { title } = data ?? {};

  if (!title) return null;

  return html`<div class="nw-title">${title}</div>`;
}
