<template>
	<!-- TODO: seccion de quienes somos -->
	<!-- TODO: imagen del negocio o de la seccion-->
	<!-- TODO: informacion de quienes somos y botones de informacion -->
	<section class="container__aboutme__hero max-w-app mx-auto">
		<article class="container__info__about grid grid-cols-1 md:grid-cols-2 gap-20">
			<div class="info__about__image">
				<img
					src="https://placehold.co/600x1000?text=Kinesica&font=roboto"
					alt="imagen de quienes somos kinesica"
				/>
			</div>
			<article class="container__info p-10">
				<h2 class="title__about text-Title font-bold mb-10">Quienes somos en Kinesica</h2>
				<p v-fade-scroll class="info__about text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quia
					incidunt nam nisi, consectetur facilis atque at perspiciatis, repudiandae quas
					beatae? Dolores laboriosam exercitationem dicta, recusandae ullam incidunt
					sapiente placeat!
				</p>

				<h3 class="title__about text-Title font-bold mb-10">Nuestra experiencia</h3>
				<p v-fade-scroll class="info__about text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quia
					incidunt nam nisi, consectetur facilis atque at perspiciatis, repudiandae quas
					beatae? Dolores laboriosam exercitationem dicta, recusandae ullam incidunt
					sapiente placeat!
				</p>

				<div class="about__icons mt-20 md:mt-50">
					<div class="icon" v-for="(card, index) in dataKinesica" :id="index">
						<div
							class="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
						>
							<div class="flex items-center justify-between mb-4">
								<div
									class="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors"
								>
									<component :is="card.icon" class="size-10" />
								</div>
							</div>

							<div class="mb-3">
								<p class="text-2xl font-bold mb-1">{{ card.value }}</p>
								<p class="text-red-100 text-sm">{{ card.subtitle }}</p>
							</div>

							<div>
								<h4 class="font-semibold text-sm mb-1">{{ card.title }}</h4>
								<p class="text-red-200 text-xs">{{ card.description }}</p>
							</div>

							<div class="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
								<div
									class="h-full bg-white/40 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
								></div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</article>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import { UsersIcon, HeartIcon } from '@heroicons/vue/24/outline';

const dataKinesica = ref([
	{
		title: 'Pacientes Activos',
		value: '247',
		subtitle: 'Este mes',
		icon: UsersIcon,
		trend: '+12%',
		description: 'Pacientes en tratamiento',
	},
	{
		title: 'Sesiones Completadas',
		value: '1,834',
		subtitle: 'Total mensual',

		trend: '+8%',
		description: 'Terapias realizadas',
	},
	{
		title: 'Tasa de Recuperación',
		value: '94%',
		subtitle: 'Promedio',
		icon: HeartIcon,
		trend: '+3%',
		description: 'Éxito en tratamientos',
	},
]);
</script>

<style scoped>
.about__icons {
	display: flex;
	justify-content: space-around;
}

.about__icons .icon {
	background-color: red;
	height: 10rem;
	width: 10rem;
	border-radius: var(--border-radius);
}
</style>
