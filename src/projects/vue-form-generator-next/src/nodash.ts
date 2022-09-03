import get from "get-value";

const objGet = get;

const isString = (str: string) => {
  if (str != null && typeof str.valueOf() === "string") {
    return true;
  }
  return false;
};

const isFunction = (func: any) => {
  return typeof func === "function";
};

const isNil = (value: any) => {
  return value == null;
};

export { objGet, isString, isFunction, isNil /*isArray*/ };
