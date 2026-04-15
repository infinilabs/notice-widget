import { html } from "uhtml";

import type { NoticeData } from "../core/render";

export function renderTitle(data?: NoticeData) {
  const { title } = data ?? {};

  if (!title) return null;

  const { label, url } = title;

  if (url) {
    return html`
      <a class="nw-title nw-title-link" href=${url} target="_blank">
        ${label}
      </a>
    `;
  }

  return html`<div class="nw-title">${label}</div>`;
}
