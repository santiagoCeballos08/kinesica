<script setup>
import BannerComponent from '@/components/components/home/BannerComponent.vue';
import AboutmeComponent from '@/components/components/home/AboutmeComponent.vue';
import PricingsComponent from '@/components/components/home/PricingsComponent.vue';
import ProsesionalsComponent from '@/components/components/home/ProsesionalsComponent.vue';
import ServiciosComponent from '@/components/components/home/ServiciosComponent.vue';
</script>

<template>
	<!-- banner componente -->
	<banner-component />
	<!-- nuestros servicios -->
	<servicios-component />
	<!-- componente aboutme -->
	<aboutme-component />
	<!-- profesionales -->
	<prosesionals-component />
	<!-- componente de precios -->
	<pricings-component />
</template>
