import { html } from "uhtml";

import { cond } from "../core/utils";
import type { NoticeData, Theme } from "../core/render";
import { renderDivider } from "./divider";
import { isString } from "es-toolkit";

export function renderLogo(theme: Theme, data?: NoticeData) {
  const { logo, menus } = data ?? {};

  if (!logo) return null;

  const src = isString(logo) ? logo : logo[theme];

  return html`
    <div class="nw-logo">
      ${cond(menus?.length !== 0, renderDivider())}

      <img src="${src}" alt="logo" />
    </div>
  `;
}
