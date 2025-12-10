<template>
	<section>
		<div class="bg-gray-50 py-16 overflow-hidden">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
				<div class="text-center">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Lo que dicen nuestros pacientes
					</h2>
					<p class="text-xl text-gray-600 max-w-2xl mx-auto">
						Nuestros pacientes han confiado en nosotros para su recuperación
					</p>
				</div>
			</div>

			<!-- Marquee Container -->
			<div class="relative">
				<!-- Gradient Overlays -->
				<div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10">
				</div>
				<div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10">
				</div>

				<!-- Marquee Content - First Row (Left to Right) -->
				<div class="flex mb-8 animate-scroll">
					<testimonial-card-component v-for="(testimonial, index) in [...testimonials, ...testimonials]"
						:key="`row1-${index}`" :testimonial="testimonial" />
				</div>

				<!-- Marquee Content - Second Row (Right to Left) -->
				<div class="flex animate-scroll-reverse">
					<testimonial-card-component
						v-for="(testimonial, index) in [...testimonialsReversed, ...testimonialsReversed]"
						:key="`row2-${index}`" :testimonial="testimonial" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import TestimonialCardComponent from '@/components/utils/TestimonialCardComponent.vue';


const testimonials = [
	{
		id: 1,
		name: "María González",
		role: "Paciente - Rehabilitación",
		comment: "Excelente servicio, los terapeutas son muy profesionales y atentos. Mi recuperación fue más rápida de lo esperado.",
		rating: 5,
		image: "MG"
	},
	{
		id: 2,
		name: "Carlos Ramírez",
		role: "Paciente - Lesión Deportiva",
		comment: "Después de meses de dolor, finalmente encontré el tratamiento adecuado. Totalmente recomendado.",
		rating: 5,
		image: "CR"
	},
	{
		id: 3,
		name: "Ana Martínez",
		role: "Paciente - Terapia Manual",
		comment: "El equipo de Kinesica es increíble. Me ayudaron a recuperar mi movilidad y calidad de vida.",
		rating: 5,
		image: "AM"
	},
	{
		id: 4,
		name: "Jorge Silva",
		role: "Paciente - Dolor Crónico",
		comment: "Profesionales de primera. El tratamiento personalizado hizo toda la diferencia en mi recuperación.",
		rating: 5,
		image: "JS"
	},
	{
		id: 5,
		name: "Laura Pérez",
		role: "Paciente - Post-operatorio",
		comment: "Atención excepcional desde el primer día. Me sentí en buenas manos durante todo el proceso.",
		rating: 5,
		image: "LP"
	},
	{
		id: 6,
		name: "Diego Torres",
		role: "Paciente - Fisioterapia",
		comment: "La mejor clínica de fisioterapia en Medellín. Equipamiento moderno y terapeutas expertos.",
		rating: 5,
		image: "DT"
	},
	{
		id: 7,
		name: "Sofía Vargas",
		role: "Paciente - Rehabilitación",
		comment: "Muy satisfecha con los resultados. El trato humano y profesional es insuperable.",
		rating: 5,
		image: "SV"
	},
	{
		id: 8,
		name: "Roberto Díaz",
		role: "Paciente - Terapia Deportiva",
		comment: "Como atleta, necesitaba recuperarme rápido. Kinesica superó mis expectativas.",
		rating: 5,
		image: "RD"
	}
];

const testimonialsReversed = computed(() => [...testimonials].reverse());
</script>

<style scoped>
@keyframes scroll {
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(-50%);
	}
}

@keyframes scroll-reverse {
	0% {
		transform: translateX(-50%);
	}

	100% {
		transform: translateX(0);
	}
}

.animate-scroll {
	animation: scroll 40s linear infinite;
}

.animate-scroll-reverse {
	animation: scroll-reverse 40s linear infinite;
}

.animate-scroll:hover,
.animate-scroll-reverse:hover {
	animation-play-state: paused;
}
</style>
