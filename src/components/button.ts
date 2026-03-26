import { html } from "uhtml";

import type { NoticeData } from "../core/render";

export function renderButton(data?: NoticeData) {
  const { label, url } = data?.button ?? {};

  if (!label) return null;

  return html`
    <a href="${url}" class="nw-button" target="_blank">${label}</a>
  `;
}
