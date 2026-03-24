import { html } from "uhtml";

import { toStyle } from "../core/utils";
import type { Options } from "../core/render";

export function renderButton(options?: Options) {
  const { label, url, ...rest } = options?.button ?? {};

  if (!label) return null;

  return html`
    <a href="${url}" class="nw-button" target="_blank" style=${toStyle(rest)}>
      ${label}
    </a>
  `;
}
