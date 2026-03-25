import { html } from "uhtml";

import { cond } from "../core/utils";
import type { Options } from "../core/render";
import { renderDivider } from "./divider";

export function renderLogo(options?: Options) {
  const { logo, menus } = options ?? {};

  if (!logo) return null;

  return html`
    <div class="nw-logo">
      ${cond(menus?.length !== 0, renderDivider(options))}

      <img src="${logo}" alt="logo" />
    </div>
  `;
}
