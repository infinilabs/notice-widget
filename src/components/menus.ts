import { html } from "uhtml";

import { cond } from "../core/utils";
import type { NoticeData } from "../core/render";
import { renderDivider } from "./divider";

export function renderMenus(data?: NoticeData, divider = true) {
  const { menus } = data ?? {};

  if (!menus || menus.length === 0) return null;

  return html`
    <div class="nw-menus">
      ${menus.map((item, index) => {
        const { label, url } = item;

        return html`
          <a href="${url}" class="nw-menu" target="_blank">${label}</a>

          ${cond(divider && index < menus.length - 1, renderDivider(data))}
        `;
      })}
    </div>
  `;
}
