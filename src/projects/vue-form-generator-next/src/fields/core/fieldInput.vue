<script></script>

<template lang="pug">
.wrapper(v-attributes="'wrapper'")
	input.form-control(
		:id="getFieldID(schema)",
		:type="inputType",
		:value="value",
		@input="onInput",
		@blur="onBlur",
		:class="schema.fieldClasses",
		@change="schema.onChange || null",
		:disabled="disabled",
		:accept="schema.accept",
		:alt="schema.alt",
		:autocomplete="schema.autocomplete",
		:checked="schema.checked",
		:dirname="schema.dirname",
		:formaction="schema.formaction",
		:formenctype="schema.formenctype",
		:formmethod="schema.formmethod",
		:formnovalidate="schema.formnovalidate",
		:formtarget="schema.formtarget",
		:height="schema.height",
		:list="schema.list",
		:max="schema.max",
		:maxlength="schema.maxlength",
		:min="schema.min",
		:minlength="schema.minlength",
		:multiple="schema.multiple",
		:name="schema.inputName",
		:pattern="schema.pattern",
		:placeholder="schema.placeholder",
		:readonly="schema.readonly",
		:required="schema.required",
		:size="schema.size",
		:src="schema.src",
		:step="schema.step",
		:width="schema.width",
		:files="schema.files"
		v-attributes="'input'")
	span.helper(v-if="schema.inputType.toLowerCase() === 'color' || schema.inputType.toLowerCase() === 'range'") {{ value }}
</template>
