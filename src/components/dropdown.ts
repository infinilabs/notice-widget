import { html } from "uhtml";
import { createElement, Menu, ArrowUpRight } from "lucide";
import { animate } from "motion";
import { isEmpty } from "es-toolkit/compat";

import { getShadowRoot } from "../core/mount";
import { toStyle } from "../core/utils";
import type { Options } from "../core/render";

const toggleDropdown = (() => {
  let isOpen = false;

  return () => {
    isOpen = !isOpen;

    const shadow = getShadowRoot();

    const menuElement = shadow.querySelector<HTMLElement>(".nw-dropdown-menus");

    if (!menuElement) return;

    if (isOpen) {
      animate(menuElement, {
        height: "auto",
        opacity: 1,
        paddingBlock: 24,
        borderTopWidth: 1,
      });
    } else {
      animate(menuElement, {
        height: 0,
        opacity: 0,
        paddingBlock: 0,
        borderTopWidth: 0,
      });
    }
  };
})();

export function renderDropdownIcon(options?: Options) {
  const { dropdownIcon, dropdownMenus } = options ?? {};

  if (isEmpty(dropdownMenus)) return null;

  return html`
    <div class="nw-dropdown-icon" onClick=${toggleDropdown}>
      ${createElement(Menu, {
        style: toStyle(dropdownIcon),
      })}
    </div>
  `;
}

export function renderDropdownMenus(options?: Options) {
  const { dropdownMenus } = options ?? {};

  if (isEmpty(dropdownMenus)) return null;

  return html`
    <div class="nw-dropdown-menus">
      ${dropdownMenus?.map((item) => {
        const { label, description, url } = item;

        return html`
          <a href="${url}" class="nw-dropdown-menu" target="_blank">
            <div class="nw-dropdown-menu-label">${label}</div>

            <div class="nw-dropdown-menu-description">${description}</div>

            ${createElement(ArrowUpRight, {
              class: "nw-dropdown-menu-arrow-icon",
            })}
          </a>
        `;
      })}
    </div>
  `;
}
