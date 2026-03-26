import { effect, html, signal } from "uhtml";
import { createElement, Menu, ArrowUpRight } from "lucide";
import { animate } from "motion";

import { getShadowRoot } from "../core/mount";
import type { NoticeData } from "../core/render";
import { renderMenus } from "./menus";

export function DropdownIcon(data?: NoticeData) {
  const open = signal(false);

  const { dropdownMenus } = data ?? {};

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
      ${createElement(Menu)}
    </div>
  `;
}

export function renderDropdownMenus(data?: NoticeData) {
  const { dropdownMenus } = data ?? {};

  if (!dropdownMenus || dropdownMenus.length === 0) return null;

  return html`
    <div class="nw-dropdown-menus">
      ${renderMenus(data, false)}
      ${dropdownMenus.map((item) => {
        const { label, description, url } = item;

        return html`
          <a href="${url}" class="nw-dropdown-menu" target="_blank">
            <div class="nw-dropdown-menu-title">${label}</div>

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
