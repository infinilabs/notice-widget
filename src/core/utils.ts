export function cond(condition: boolean, trueValue: any, falseValue?: any) {
  return condition ? trueValue : (falseValue ?? null);
}
