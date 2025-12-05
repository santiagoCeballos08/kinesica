<template>
	<div :class="customClass" class="inline-block max-w-full size-10">
		<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<path class="stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M2 11.778L9.785 2v5.778H18L9.785 18v-6.222H2z"></path>
			</g>
		</svg>
	</div>
</template>

<script setup>


const props = defineProps({
	customClass: {
		type: String,
		default: 'text-white'
	}
})
</script>

<style scoped></style>
