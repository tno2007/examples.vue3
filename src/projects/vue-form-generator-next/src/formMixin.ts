import { ref, onMounted, onUnmounted } from "vue";

import { get as objGet } from "get-value";

export const useFormMixin = () => {
  // state encapsulated and managed by the composable
  //const x = ref(0);
  //const y = ref(0);

  // a composable can update its managed state over time.
  //function update(event) {
  //  x.value = event.pageX;
  //  y.value = event.pageY;
  //}

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  //onMounted(() => window.addEventListener("mousemove", update));
  //onUnmounted(() => window.removeEventListener("mousemove", update));

  // custom stuff here...
  // ***************************

  const getFieldRowClasses = (field) => {
    const hasErrors = fieldErrors(field).length > 0;
    let baseClasses = {
      [objGet(this.options, "validationErrorClass", "error")]: hasErrors,
      [objGet(this.options, "validationSuccessClass", "valid")]: !hasErrors,
      disabled: this.fieldDisabled(field),
      readonly: this.fieldReadonly(field),
      featured: this.fieldFeatured(field),
      required: this.fieldRequired(field),
    };

    if (isArray(field.styleClasses)) {
      forEach(field.styleClasses, (c) => (baseClasses[c] = true));
    } else if (isString(field.styleClasses)) {
      baseClasses[field.styleClasses] = true;
    }

    if (!isNil(field.type)) {
      baseClasses["field-" + field.type] = true;
    }

    return baseClasses;
  };

  const fieldErrors = (field) => {
    let res = this.errors.filter((e) => e.field === field);
    return res.map((item) => item.error);
  };

  // Get disabled attr of field
  const fieldDisabled = (field) => {
    if (isFunction(field.disabled))
      return field.disabled.call(this, this.model, field, this);

    if (isNil(field.disabled)) return false;

    return field.disabled;
  };
  // Get readonly prop of field
  const fieldReadonly = (field) => {
    if (isFunction(field.readonly))
      return field.readonly.call(this, this.model, field, this);

    if (isNil(field.readonly)) return false;

    return field.readonly;
  };
  // Get featured prop of field
  const fieldFeatured = (field) => {
    if (isFunction(field.featured))
      return field.featured.call(this, this.model, field, this);

    if (isNil(field.featured)) return false;

    return field.featured;
  };
  // Get required prop of field
  const fieldRequired = (field) => {
    if (isFunction(field.required))
      return field.required.call(this, this.model, field, this);

    if (isNil(field.required)) return false;

    return field.required;
  };

  // expose managed state as return value
  return { x, y };
};
