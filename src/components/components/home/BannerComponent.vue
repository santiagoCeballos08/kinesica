<template>
	<article class="container__banner__hero w-full mb-40">
		<section class="container__banner relative">
			<picture class="w-full container__video__banner">
				<source srcset="https://placehold.co/400x800" media="(max-width: 1200px)" />
				<img
					src="https://placehold.co/1400x600"
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
				<h2 class="mb-20 max-w-[70rem] text-center text-4xl">
					Recuperación atlética de élite. Maximiza tu rendimiento deportivo con técnicas
					especializadas en fisioterapia deportiva.
				</h2>
				<section
					class="container__button__banner flex gap-8 lg:gap-10 flex-wrap mb-20 md:mb-40 justify-center"
				>
					<a href="" class="boton-contacto"
						>Agenda con nosotros <calendar-days-icon class="size-20 inline" />
					</a>
					<a href="" class="boton-contacto group hover:scale-100">
						Saber Más
						<ArrowLongRightIcon
							class="size-10 rotate-[-45deg] group-hover:scale-150 transition-all"
						/>
					</a>
				</section>
				<arrow-down-icon class="" />
			</div>
		</section>
	</article>
</template>

<script setup>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline';
import ArrowDownIcon from '@/assets/icons/ArrowDownIcon.vue';
</script>

<style scoped>
.boton-contacto {
	padding: 17px 40px;
	border-radius: 50px;
	cursor: pointer;
	border: 0;
	background-color: white;
	box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	font-size: 15px;
	transition: all 0.5s ease;
}

.boton-contacto:hover {
	letter-spacing: 3px;
	background-color: var(--color-main);
	color: var(--color-white-app);
	box-shadow: var(--color-white-main) 0px 7px 29px 0px;
}

.boton-contacto:active {
	letter-spacing: 3px;
	background-color: var(--color-main);
	color: var(--color-white-app);
	box-shadow: var(--color-main) 0px 0px 0px 0px;
	transform: translateY(10px);
	transition: 100ms;
}
</style>
