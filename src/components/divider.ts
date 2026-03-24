import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { Options } from "../core/render";

export function renderDivider(options?: Options) {
  const { divider } = options ?? {};

  return html`<div class="nw-divider" style=${toStyle(divider)} />`;
}
