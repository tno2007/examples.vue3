<script setup lang="ts">

defineProps({
	items: {
		type: Array
	}
});
</script>

<template>
	
	<ul>
		<li v-for="(i, index) in items">
			<div>
				<span>{{ i.name }}</span>
			</div>
		</li>
	</ul>

</template>