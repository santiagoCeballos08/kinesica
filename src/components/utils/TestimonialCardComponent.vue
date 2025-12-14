<template>
	<div class="flex-shrink-0 lg:w-[40rem] w-[22rem] mx-4">
		<div
			class="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
			<!-- Quote Icon and Rating -->
			<div class="flex justify-between items-start mb-4">
				<!-- Quote Icon SVG -->
				<svg class="w-8 h-8 text-teal-500 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
				</svg>

				<!-- Stars Rating -->

			</div>

			<!-- Comment -->
			<p class="text-gray-700 mb-6 line-clamp-4 min-h-[96px]">
				"{{ testimonial.comment }}"
			</p>

			<!-- User Info -->
			<div class="flex items-center">
				<div
					class="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg mr-4">
					{{ testimonial.image }}
				</div>
				<div>
					<h4 class="font-bold text-gray-900">{{ testimonial.name }}</h4>
					<p class="text-sm text-gray-500">{{ testimonial.role }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	testimonial: {
		type: Object,
		required: true
	}
});
</script>

<style scoped>
.line-clamp-4 {
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
