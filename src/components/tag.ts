import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { NoticeData } from "../core/render";

export function renderTag(data?: NoticeData) {
  const { label, ...rest } = data?.tag ?? {};

  if (!label) return null;

  return html`<div class="nw-tag" style=${toStyle(rest)}>${label}</div>`;
}
