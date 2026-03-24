import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { Options } from "../core/render";

export function renderTag(options?: Options) {
  const { label, ...rest } = options?.tag ?? {};

  if (!label) return null;

  return html`<div class="nw-tag" style=${toStyle(rest)}>${label}</div>`;
}
