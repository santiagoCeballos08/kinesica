<script setup>
import BannerComponent from '@/components/components/home/BannerComponent.vue';
import AboutmeComponent from '@/components/components/home/AboutmeComponent.vue';
import PricingsComponent from '@/components/components/home/PricingsComponent.vue';
import ProsesionalsComponent from '@/components/components/home/ProsesionalsComponent.vue';
import ServiciosComponent from '@/components/components/home/ServicesComponent.vue';
import CommentSectionComponent from '@/components/components/home/CommentSectionComponent.vue';
</script>

<template>
	<div>
		<!-- banner componente -->
		<banner-component />
		<!-- nuestros servicios -->
		<servicios-component />
		<!-- componente aboutme -->
		<aboutme-component />

		<!-- seccion de comentarios usuarios -->
		<comment-section-component />

		<!-- profesionales -->
		<prosesionals-component />
		<!-- componente de precios -->
		<pricings-component />

	</div>
</template>
