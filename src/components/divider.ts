import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { NoticeData } from "../core/render";

export function renderDivider(data?: NoticeData) {
  const { divider } = data ?? {};

  return html`<div class="nw-divider" style=${toStyle(divider)} />`;
}
