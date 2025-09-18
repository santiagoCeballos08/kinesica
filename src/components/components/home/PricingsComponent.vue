<template>
	<section class="bg-white container__princings">
		<section class="container__princings mx-app">
			<article class="container__princing"></article>
		</section>
	</section>
</template>

<script setup>
import { ref } from 'vue';
const princings = ref([
	{
		title: '',
		princings: 100,
		services: {},
	},
]);
</script>

<style scoped></style>
