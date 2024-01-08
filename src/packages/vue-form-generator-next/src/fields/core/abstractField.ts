import { isString, objGet } from "../../nodash";

import validators from "../utils/validators";

const convertValidator = (validator: string) => {
  if (isString(validator)) {
    if (validators[validator] != null) return validators[validator];
    else {
      console.warn(`'${validator}' is not a validator function!`);
      return null; // caller need to handle null
    }
  }
  return validator;
};

const attributesDirective = (el: any, binding: any, vnode: any) => {
  let attrs = objGet(vnode.context, "schema.attributes", {});
  let container = binding.value || "input";
  if (isString(container)) {
    attrs = objGet(attrs, container) || attrs;
  }

  for (let [key, val] of attrs) {
    el.setAttribute(key, val);
  }
};

const validate = (calledParent) => {
  clearValidationErrors();
  let validateAsync = objGet(this.formOptions, "validateAsync", false);

  let results = [];

  if (
    this.schema.validator &&
    this.schema.readonly !== true &&
    this.disabled !== true
  ) {
    let validators = [];
    if (!isArray(this.schema.validator)) {
      validators.push(convertValidator(this.schema.validator).bind(this));
    } else {
      forEach(this.schema.validator, (validator) => {
        validators.push(convertValidator(validator).bind(this));
      });
    }

    forEach(validators, (validator) => {
      if (validateAsync) {
        results.push(validator(this.value, this.schema, this.model));
      } else {
        let result = validator(this.value, this.schema, this.model);
        if (result && isFunction(result.then)) {
          result.then((err) => {
            if (err) {
              this.errors = this.errors.concat(err);
            }
            let isValid = this.errors.length === 0;
            this.$emit("validated", isValid, this.errors, this);
          });
        } else if (result) {
          results = results.concat(result);
        }
      }
    });
  }

  let handleErrors = (errors) => {
    let fieldErrors = [];
    forEach(arrayUniq(errors), (err) => {
      if (isArray(err) && err.length > 0) {
        fieldErrors = fieldErrors.concat(err);
      } else if (isString(err)) {
        fieldErrors.push(err);
      }
    });
    if (isFunction(this.schema.onValidated)) {
      this.schema.onValidated.call(this, this.model, fieldErrors, this.schema);
    }

    let isValid = fieldErrors.length === 0;
    if (!calledParent) {
      this.$emit("validated", isValid, fieldErrors, this);
    }
    this.errors = fieldErrors;
    return fieldErrors;
  };

  if (!validateAsync) {
    return handleErrors(results);
  }

  return Promise.all(results).then(handleErrors);
};

const debouncedValidate = () => {
  if (!isFunction(this.debouncedValidateFunc)) {
    this.debouncedValidateFunc = debounce(
      this.validate.bind(this),
      objGet(
        this.schema,
        "validateDebounceTime",
        objGet(this.formOptions, "validateDebounceTime", 500)
      )
    );
  }
  this.debouncedValidateFunc();
};

const updateModelValue = (newValue, oldValue) => {
  let changed = false;
  if (isFunction(this.schema.set)) {
    this.schema.set(this.model, newValue);
    changed = true;
  } else if (this.schema.model) {
    this.setModelValueByPath(this.schema.model, newValue);
    changed = true;
  }

  if (changed) {
    this.$emit("model-updated", newValue, this.schema.model);

    if (isFunction(this.schema.onChanged)) {
      this.schema.onChanged.call(
        this,
        this.model,
        newValue,
        oldValue,
        this.schema
      );
    }

    if (objGet(this.formOptions, "validateAfterChanged", false) === true) {
      if (
        objGet(
          this.schema,
          "validateDebounceTime",
          objGet(this.formOptions, "validateDebounceTime", 0)
        ) > 0
      ) {
        this.debouncedValidate();
      } else {
        this.validate();
      }
    }
  }
};

const clearValidationErrors = () => {
  this.errors.splice(0);
};

const setModelValueByPath = (path, value) => {
  // convert array indexes to properties
  let s = path.replace(/\[(\w+)\]/g, ".$1");

  // strip a leading dot
  s = s.replace(/^\./, "");

  let o = this.model;
  const a = s.split(".");
  let i = 0;
  const n = a.length;
  while (i < n) {
    let k = a[i];
    if (i < n - 1)
      if (o[k] !== undefined) {
        // Found parent property. Step in
        o = o[k];
      } else {
        // Create missing property (new level)
        this.$root.$set(o, k, {});
        o = o[k];
      }
    else {
      // Set final property value
      this.$root.$set(o, k, value);
      return;
    }

    ++i;
  }
};

const getFieldID = (schema, unique = false) => {
  const idPrefix = objGet(this.formOptions, "fieldIdPrefix", "");
  return slugifyFormID(schema, idPrefix) + (unique ? "-" + uniqueId() : "");
};

const getFieldClasses = () => {
  return objGet(this.schema, "fieldClasses", []);
};

const formatValueToField = (value) => {
  return value;
};

const formatValueToModel = (value) => {
  return value;
};
