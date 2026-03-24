import { html } from "uhtml";
import { isEmpty } from "es-toolkit/compat";

import { cond } from "../core/utils";
import type { Options } from "../core/render";
import { renderDivider } from "./divider";

export function renderMenus(options?: Options) {
  const { menus } = options ?? {};

  if (isEmpty(menus)) return null;

  return html`
    <div class="nw-menus">
      ${menus?.map((item, index) => {
        const { label, url } = item;

        return html`
          <a href="${url}" class="nw-menu" target="_blank">${label}</a>

          ${cond(index < menus.length - 1, renderDivider(options))}
        `;
      })}
    </div>
  `;
}
