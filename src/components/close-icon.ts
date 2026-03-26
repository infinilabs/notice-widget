import { html } from "uhtml";
import { createElement, X } from "lucide";
import { animate } from "motion";

import { getShadowRoot } from "../core/mount";
import type { NoticeData } from "../core/render";

const handleClose = async () => {
  const shadow = getShadowRoot();

  await animate(shadow.host, {
    height: 0,
    opacity: 0,
  });

  shadow.host.remove();
};

export function renderCloseIcon(data?: NoticeData) {
  const { closable = true } = data ?? {};

  if (!closable) return null;

  return html`
    <div class="nw-close-icon" onClick=${handleClose}>${createElement(X)}</div>
  `;
}
