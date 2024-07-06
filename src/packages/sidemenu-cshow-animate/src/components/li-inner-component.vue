<script setup lang="ts">

defineProps({
	item: {
		type: Object
	}
});
</script>

<template>
	
	<span>{{ item.name }}</span>
	

</template>