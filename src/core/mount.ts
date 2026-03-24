let shadowRoot: ShadowRoot | null = null;

export function getShadowRoot() {
  if (shadowRoot) return shadowRoot;

  const host = Object.assign(document.createElement("div"), {
    id: "__notice_widget__",
    style: "overflow: hidden",
  });

  document.body.prepend(host);

  shadowRoot = host.attachShadow({ mode: "open" });

  return shadowRoot;
}
