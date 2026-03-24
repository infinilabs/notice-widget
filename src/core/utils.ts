export function toStyle(cssProperties?: Record<string, string | undefined>) {
  if (!cssProperties) return "";

  return Object.entries(cssProperties)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

export function cond(condition: boolean, trueValue: any, falseValue?: any) {
  return condition ? trueValue : (falseValue ?? null);
}
