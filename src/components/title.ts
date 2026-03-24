import { html } from "uhtml";

import type { Options } from "../core/render";

export function renderTitle(options?: Options) {
  const { title } = options ?? {};

  if (!title) return null;

  return html`<div class="nw-title">${title}</div>`;
}
