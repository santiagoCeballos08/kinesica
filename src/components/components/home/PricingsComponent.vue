<template>
	<section class=" container__princings__hero mt-40 bg-white-app p-4">
		<span class="title-section mb-10">nuestros precios</span>
		<h2 class="text-title font-bold border-dotted border-b-2 text-center">Nuestros increibles preicios</h2>
		<section class="container__princings ">
			<section class="princings__services mt-10 p-5 flex w-full justify-center gap-10">
				<button class="services__button button "><span> maso terapia</span></button>
				<button class="services__button button "><span>Fisio terapia</span></button>
				<button class="services__button button "><span>Traiding</span></button>
			</section>
			<article class="container__princing"></article>
		</section>
	</section>
</template>

<script setup>
import { ref } from 'vue';


const princingsMasoTerapia = ref([
	{
		title: '',
		princings: 100,
		services: {},
	},
]);

const presiosTerapias = ref([

])


</script>

<style scoped>
/* From Uiverse.io by doniaskima */
.button,
.button *,
.button :after,
.button :before,
.button:after,
.button:before {
	border: 0 solid;
	box-sizing: border-box;
}

.button {
	-webkit-tap-highlight-color: transparent;
	-webkit-appearance: button;
	background-color: var(--color-black-app);
	background-image: none;
	color: #fff;
	cursor: pointer;
	font-size: 100%;
	font-weight: 600;
	line-height: 1.5;
	margin: 0;
	-webkit-mask-image: -webkit-radial-gradient(var(--color-black-app), #fff);
	padding: 0;
	text-transform: uppercase;
}

.button:disabled {
	cursor: default;
}

.button:-moz-focusring {
	outline: auto;
}

.button svg {
	display: block;
	vertical-align: middle;
}

.button [hidden] {
	display: none;
}

.button {
	border-radius: 99rem;
	border-width: 2px;
	overflow: hidden;
	padding: 0.8rem 3rem;
	position: relative;
}

.button:nth-child(2) {
	font-size: 2.5rem;
	padding: 3rem 4rem;
}

.button span {

	mix-blend-mode: difference;
}

.button:after,
.button:before {
	background: linear-gradient(90deg,
			#fff 25%,
			transparent 0,
			transparent 50%,
			#fff 0,
			#fff 75%,
			transparent 0);
	content: "";
	inset: 0;
	position: absolute;
	transform: translateY(var(--progress, 100%));
	transition: transform 0.2s ease;
}

.button:after {
	--progress: -100%;
	background: linear-gradient(90deg,
			transparent 0,
			transparent 25%,
			#fff 0,
			#fff 50%,
			transparent 0,
			transparent 75%,
			#fff 0);
	z-index: -1;
}

.button:hover:after,
.button:hover:before {
	--progress: 0;
}
</style>
