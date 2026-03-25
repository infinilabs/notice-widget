import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { NoticeData } from "../core/render";

export function renderButton(data?: NoticeData) {
  const { label, url, ...rest } = data?.button ?? {};

  if (!label) return null;

  return html`
    <a href="${url}" class="nw-button" target="_blank" style=${toStyle(rest)}>
      ${label}
    </a>
  `;
}
