<script setup lang="ts">
import { useFormMixin } from "./formMixin";
</script>

<template>
  <div class="form-group" :class="getFieldRowClasses(field)">
    <label
      v-if="fieldTypeHasLabel(field)"
      :for="getFieldID(field)"
      :class="field.labelClasses"
    >
      <span v-html="field.label"></span>
      <span v-if="field.help" class="help">
        <i class="icon"></i>
        <div class="helpText" v-html="field.help"></div>
      </span>
    </label>

    <div class="field-wrap">
      <component
        ref="child"
        :is="getFieldType(field)"
        :vfg="vfg"
        :disabled="fieldDisabled(field)"
        :model="model"
        :schema="field"
        :formOptions="options"
        @model-updated="onModelUpdated"
        @validated="onFieldValidated"
      ></component>
      <div v-if="buttonVisibility(field)" class="buttons">
        <button
          v-for="(btn, index) in field.buttons"
          @click="buttonClickHandler(btn, field, $event)"
          :class="btn.classes"
          :key="index"
          v-text="btn.label"
          :type="getButtonType(btn)"
        ></button>
      </div>
    </div>

    <div v-if="field.hint" class="hint" v-html="fieldHint(field)"></div>

    <div v-if="fieldErrors(field).length > 0" class="errors help-block">
      <span
        v-for="(error, index) in fieldErrors(field)"
        :key="index"
        v-html="error"
      ></span>
    </div>
  </div>
</template>
