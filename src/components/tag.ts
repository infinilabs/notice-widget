import { html } from "uhtml";

import type { NoticeData } from "../core/render";

export function renderTag(data?: NoticeData) {
  const { tag } = data ?? {};

  if (!tag) return null;

  return html`<div class="nw-tag">${tag}</div>`;
}
