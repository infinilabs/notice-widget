import { html } from "uhtml";

import { getShadowRoot } from "./mount";
import styles from "../styles/base.scss?inline";
import { toStyle } from "./utils";
import { renderTag } from "../components/tag";
import { renderTitle } from "../components/title";
import { renderButton } from "../components/button";
import { renderMenus } from "../components/menus";
import { renderLogo } from "../components/logo";
import {
  renderDropdownIcon,
  renderDropdownMenus,
} from "../components/dropdown";
import { renderCloseIcon } from "../components/close-icon";

export interface Options {
  color?: string;
  background?: string;
  title?: string;
  logo?: string;
  closable?: boolean;
  tag?: {
    label: string;
    color?: string;
    background?: string;
  };
  button?: {
    label: string;
    color?: string;
    background?: string;
    url?: string;
  };
  menus?: Array<{
    label: string;
    url: string;
  }>;
  dropdownIcon?: {
    color?: string;
  };
  dropdownMenus?: Array<{
    label: string;
    description: string;
    url: string;
  }>;
  divider?: {
    background?: string;
  };
  closeIcon?: {
    color?: string;
  };
}

export function renderNotice(options?: Options) {
  if (options) {
    const shadow = getShadowRoot();

    if (!shadow.querySelector("style")) {
      const style = document.createElement("style");

      style.textContent = styles;

      shadow.appendChild(style);
    }

    const { color, background } = options;

    const el = html`
      <div class="nw-banner" style=${toStyle({ color, background })}>
        <div class="nw-body">
          <div class="nw-content">
            ${renderTag(options)} ${renderTitle(options)}
            ${renderButton(options)}
          </div>

          <div class="nw-actions">
            ${renderMenus(options)} ${renderLogo(options)}
            ${renderDropdownIcon(options)}
          </div>
        </div>

        ${renderCloseIcon(options)} ${renderDropdownMenus(options)}
      </div>
    `;

    shadow.prepend(el as Node);
  }
}
