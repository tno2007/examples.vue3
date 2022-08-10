function isString(str: string) {
  if (str != null && typeof str.valueOf() === "string") {
    return true;
  }
  return false;
}

function isFunction(func: any) {
  return typeof func === "function";
}
