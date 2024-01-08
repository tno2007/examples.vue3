<script setup lang="ts">
import { useFormMixin } from "./formMixin";
</script>

<template lang="pug">
div.vue-form-generator(v-if='schema != null')
	fieldset(v-if="schema.fields", :is='tag')
		template(v-for='field in fields')
			form-group(v-if='fieldVisible(field)', :vfg="vfg", :field="field", :errors="errors", :model="model", :options="options", @validated="onFieldValidated", @model-updated="onModelUpdated")

	template(v-for='group in groups')
		fieldset(:is='tag', :class='getFieldRowClasses(group)')
			legend(v-if='group.legend') {{ group.legend }}
			template(v-for='field in group.fields')
				form-group(v-if='fieldVisible(field)', :vfg="vfg", :field="field", :errors="errors", :model="model", :options="options", @validated="onFieldValidated", @model-updated="onModelUpdated")
</template>
