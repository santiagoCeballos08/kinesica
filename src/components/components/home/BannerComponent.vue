<template>
	<article class="container__banner__hero w-full">
		<section
			class="container__banner relative min-h-[60vh] lg:min-h-[40vh] h-[70vh] overflow-hidden"
		>
			<picture class="w-full container__video__banner">
				<source srcset="https://placehold.co/400x800" media="(max-width: 1200px)" />
				<img
					src="https://placehold.co/1400x700"
					alt="video kinesica R"
					class="w-full object-cover"
				/>
			</picture>

			<div
				class="container__banner__info absolute inset-0 flex flex-col items-center justify-center bg-black-app/50 text-center"
			>
				<span class="opacity-75">Kinesica Fisioterapia</span>
				<h1 class="uppercase text-6xl lg:text-[5vw] font-bold mb-10">
					SIN EXCUSAS. SOLO RESULTADOS
				</h1>
				<h3 class="mb-20 w-1/2 text-center">
					Recuperación atlética de élite. Maximiza tu rendimiento deportivo con técnicas
					especializadas en fisioterapia deportiva.
				</h3>
				<section class="container__button__banner flex gap-8 lg:gap-10 flex-wrap">
					<a href="" class="boton-contacto"
						>Agenda con nosotros <calendar-days-icon class="size-20 inline" />
					</a>
					<a href="" class="boton-contacto">
						Saber Más <ArrowLongRightIcon class="size-10" />
					</a>
				</section>
			</div>
		</section>
	</article>
</template>

<script setup>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped></style>
