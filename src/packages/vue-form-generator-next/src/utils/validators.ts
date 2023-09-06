/*
import {
  defaults,
  isNil,
  isNumber,
  isInteger,
  isString,
  isArray,
  isFunction,
  isFinite,
} from "lodash";
*/

import { format } from "fecha";

import { isFunction, isString } from "../nodash";
import type { IField } from "../typings/index";

let resources = {
  fieldIsRequired: "This field is required!",
  invalidFormat: "Invalid format!",

  numberTooSmall: "The number is too small! Minimum: {0}",
  numberTooBig: "The number is too big! Maximum: {0}",
  invalidNumber: "Invalid number",
  invalidInteger: "The value is not an integer",

  textTooSmall: "The length of text is too small! Current: {0}, Minimum: {1}",
  textTooBig: "The length of text is too big! Current: {0}, Maximum: {1}",
  thisNotText: "This is not a text!",

  thisNotArray: "This is not an array!",

  selectMinItems: "Select minimum {0} items!",
  selectMaxItems: "Select maximum {0} items!",

  invalidDate: "Invalid date!",
  dateIsEarly: "The date is too early! Current: {0}, Minimum: {1}",
  dateIsLate: "The date is too late! Current: {0}, Maximum: {1}",

  invalidEmail: "Invalid e-mail address!",
  invalidURL: "Invalid URL!",

  invalidCard: "Invalid card format!",
  invalidCardNumber: "Invalid card number!",

  invalidTextContainNumber:
    "Invalid text! Cannot contains numbers or special characters",
  invalidTextContainSpec: "Invalid text! Cannot contains special characters",
};

export function checkEmpty(
  value: string,
  required: boolean,
  messages = resources
) {
  if (value == null || value === "") {
    if (required) {
      return [msg(messages.fieldIsRequired)];
    } else {
      return [];
    }
  }
  return null;
}

export function msg(text: string, ...args: any[]) {
  if (text != null && args.length > 1) {
    for (let i = 1; i < args.length; i++) {
      text = text.replace("{" + (i - 1) + "}", args[i]);
    }
  }

  return text;
}

const validators = {
  resources,

  required(value: any, field: IField, model: object, messages = resources) {
    return checkEmpty(value, field.required, messages);
  },

  number(value: any, field: IField, model: object, messages = resources) {
    let res = checkEmpty(value, field.required, messages);
    if (res != null) return res;

    let err = [];
    if (isFinite(value as number)) {
      if (!(field.min == null) && value < field.min) {
        err.push(msg(messages.numberTooSmall, field.min));
      }

      if (!(field.max == null) && value > field.max) {
        err.push(msg(messages.numberTooBig, field.max));
      }
    } else {
      err.push(msg(messages.invalidNumber));
    }

    return err;
  },

  integer(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;
    let errs = validators.number(value, field, model, messages);

    if (!Number.isInteger(value)) {
      errs.push(msg(messages.invalidInteger));
    }

    return errs;
  },

  double(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    if (!Number.isInteger(value) || isNaN(value as number)) {
      return [msg(messages.invalidNumber)];
    }
  },

  string(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    let err = [];
    if (isString(value as string)) {
      let v = value as string;
      if (!(field.min == null) && v.length < field.min) {
        err.push(msg(messages.textTooSmall, v.length, field.min));
      }

      if (!(field.max == null) && v.length > field.max) {
        err.push(msg(messages.textTooBig, v.length, field.max));
      }
    } else {
      err.push(msg(messages.thisNotText));
    }

    return err;
  },

  array(value: any, field: IField, model: object, messages = resources) {
    if (field.required) {
      if (!Array.isArray(value)) {
        return [msg(messages.thisNotArray)];
      }

      if (value.length === 0) {
        return [msg(messages.fieldIsRequired)];
      }
    }

    if (!(value == null)) {
      if (!(field.min == null) && value.length < field.min) {
        return [msg(messages.selectMinItems, field.min)];
      }

      if (!(field.max == null) && value.length > field.max) {
        return [msg(messages.selectMaxItems, field.max)];
      }
    }
  },

  date(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    let m = new Date(value);
    if (isNaN(m.getDate())) {
      return [msg(messages.invalidDate)];
    }

    let err = [];

    if (!(field.min == null)) {
      let min = new Date(field.min);
      if (m.valueOf() < min.valueOf()) {
        err.push(msg(messages.dateIsEarly, format(m), format(min)));
      }
    }

    if (!(field.max == null)) {
      let max = new Date(field.max);
      if (m.valueOf() > max.valueOf()) {
        err.push(msg(messages.dateIsLate, format(m), format(max)));
      }
    }

    return err;
  },

  regexp(value: any, field: IField, model: object, messages = resources) {
    let res = checkEmpty(value, field.required, messages);
    if (res != null) return res;

    if (!(field.pattern == null)) {
      let re = new RegExp(field.pattern);
      if (!re.test(value)) {
        return [msg(messages.invalidFormat)];
      }
    }
  },

  email(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
    if (!re.test(value as string)) {
      return [msg(messages.invalidEmail)];
    }
  },

  url(value: any, field: IField, model: object, messages = resources) {
    let res = checkEmpty(value, field.required, messages);
    if (res != null) return res;

    let re =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g; // eslint-disable-line no-useless-escape
    if (!re.test(value)) {
      return [msg(messages.invalidURL)];
    }
  },

  creditCard(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    /*  From validator.js code
			https://github.com/chriso/validator.js/blob/master/src/lib/isCreditCard.js
		*/
    const creditCard =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    const sanitized = (value as string).replace(/[^0-9]+/g, "");
    if (!creditCard.test(sanitized)) {
      return [msg(messages.invalidCard)];
    }
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += (tmpNum % 10) + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }

    if (!(sum % 10 === 0 ? sanitized : false)) {
      return [msg(messages.invalidCardNumber)];
    }
  },

  alpha(
    value: string | number,
    field: IField,
    model: object,
    messages = resources
  ) {
    let res = checkEmpty(value as string, field.required, messages);
    if (res != null) return res;

    let re = /^[a-zA-Z]*$/;
    if (!re.test(value as string)) {
      return [msg(messages.invalidTextContainNumber)];
    }
  },

  alphaNumeric(value: any, field: IField, model: object, messages = resources) {
    let res = checkEmpty(value, field.required, messages);
    if (res != null) return res;

    let re = /^[a-zA-Z0-9]*$/;
    if (!re.test(value)) {
      return [msg(messages.invalidTextContainSpec)];
    }
  },
};

/*
Object.keys(validators).forEach((name) => {
  const fn = validators[name];
  if (isFunction(fn)) {
    fn.locale =
      (customMessages: any) => (value: any, field: any, model: string) =>
        fn(value, field, model, defaults(customMessages, resources));
  }
});
*/

export default validators;
