import { effect, html, signal } from "uhtml";
import { createElement, Menu, ArrowUpRight } from "lucide";
import { animate } from "motion";

import { getShadowRoot } from "../core/mount";
import { toStyle } from "../core/utils";
import type { Options } from "../core/render";
import { renderMenus } from "./menus";

export function DropdownIcon(options?: Options) {
  const open = signal(false);

  const { dropdownIcon, dropdownMenus } = options ?? {};

  if (!dropdownMenus || dropdownMenus.length === 0) return null;

  effect(() => {
    const isOpen = open.value;

    const shadow = getShadowRoot();
    const element = shadow.querySelector(".nw-dropdown-menus");

    if (!element) return;

    if (isOpen) {
      animate(element, {
        height: "auto",
        opacity: 1,
        paddingBlock: 24,
        borderTopWidth: 1,
      });
    } else {
      animate(element, {
        height: 0,
        opacity: 0,
        paddingBlock: 0,
        borderTopWidth: 0,
      });
    }
  });

  const handleClick = () => {
    open.value = !open.value;
  };

  return html`
    <div class="nw-dropdown-icon" onClick=${handleClick}>
      ${createElement(Menu, {
        style: toStyle(dropdownIcon),
      })}
    </div>
  `;
}

export function renderDropdownMenus(options?: Options) {
  const { dropdownMenus } = options ?? {};

  if (!dropdownMenus || dropdownMenus.length === 0) return null;

  return html`
    <div class="nw-dropdown-menus">
      ${renderMenus(options, false)}
      ${dropdownMenus.map((item) => {
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
