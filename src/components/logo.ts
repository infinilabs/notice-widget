import { html } from "uhtml";

import { cond } from "../core/utils";
import type { NoticeData } from "../core/render";
import { renderDivider } from "./divider";

export function renderLogo(data?: NoticeData) {
  const { logo, menus } = data ?? {};

  if (!logo) return null;

  return html`
    <div class="nw-logo">
      ${cond(menus?.length !== 0, renderDivider(data))}

      <img src="${logo}" alt="logo" />
    </div>
  `;
}
