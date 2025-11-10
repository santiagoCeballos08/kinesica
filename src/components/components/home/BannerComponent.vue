<template>
	<article class="container__banner__hero w-full " id="inicio">
		<section class="container__banner relative">
			<video class="w-full absolute top-0 z-5 h-full object-cover" autoplay loop muted playsinline>
				<source src="/assets/banner.webm" type="video/mp4">
				<!-- Provide a fallback image if video doesn't load -->
				<img src="https://placehold.co/1400x600" alt="video kinesica R" class="w-full object-cover">
			</video>
			<div class="bg-linear-65 from-main-200/20 to-black-app/50 absolute top-0 left-0 w-full h-full z-10"></div>

			<div
				class="container__banner__info relative flex flex-col items-center justify-center z-20 lg:min-h-[100vh]  text-center p-10">
				<span class="opacity-75 lg:text-4xl text-main-200">Kinesica Fisioterapia</span>
				<h1 class="uppercase text-6xl lg:text-[5vw] font-bold mb-10 text-main">
					cuidamos tu cuerpo <br />con el corazón
				</h1>
				<h2 class="mb-20 max-w-[70rem] text-center   lg:text-4xl text-white opacity-50">
					Recuperación atlética de élite. Maximiza tu rendimiento deportivo con técnicas
					especializadas en fisioterapia deportiva.
				</h2>
				<section class="container__button__banner flex gap-8 lg:gap-10 flex-wrap mb-20 md:mb-40 justify-center">
					<a href="" class="boton-contacto">Agenda con nosotros <calendar-days-icon class="size-20 inline" />
					</a>
					<a href="" class="boton-contacto group hover:scale-100">
						Saber Más
						<ArrowLongRightIcon class="size-10 rotate-[-45deg] group-hover:scale-150 transition-all" />
					</a>
				</section>
				<arrow-down-icon class="" />
			</div>
		</section>
		<!-- <div class="h-40 bg-black-app from-black-app to-transparent bg-linear-180"></div> -->
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
