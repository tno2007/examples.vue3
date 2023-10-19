<script setup lang="ts">

defineProps({
    to: {
        type: String,
        default: "#"
    },
    label: {
        type: String,
        default: "Hello"
    }
})

</script>

<template>
    <button :href="to" class="ml-3" type="button">
        <slot>{{ label }}</slot>
    </button>
</template>