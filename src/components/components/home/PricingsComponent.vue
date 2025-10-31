<template>
	<section class=" container__princings__hero mt-40 bg-white-app p-4" id="precios">
		<span class="title-section mb-10">nuestros precios</span>
		<h2 class="text-title font-bold border-dotted border-main-300 border-b-2 text-center text-main-700">Nuestros
			increibles preicios
		</h2>
		<section class="container__princings__titles ">
			<section class="princings__services mt-10 mb-40 p-5 flex flex-wrap w-full justify-center gap-10">
				<button class="services__button button" @click="princingsInfo('profesional')">
					<span> Entrenamiento Profesional</span>
				</button>
				<button class="services__button button" @click="princingsInfo('fisioterapia')">
					<span>Fisioterapia General</span>
				</button>
				<button class="services__button button" @click="princingsInfo('masoterapia')">
					<span>masoterapia</span>
				</button>
			</section>
		</section>

		<!-- precios de proyectos -->
		<section class="container__princins__cards__hero">
			<section
				class="container__princins__cards flex flex-col lg:flex-row gap-8 items-center lg:justify-center max-w-app mx-auto">

				<!-- CARD DE PRECIOS -->
				<div v-for="value in datosPrincipales" :key="value.namePlan"
					class="card-pricings hover:scale-102 transition-all  max-w-[35rem] h-[60rem] bg-linear-45 from-main-50 via-main-50 to-main shadow-md  rounded-4xl p-4"
					data-services="">
					<div class="card__info flex flex-col h-full ">
						<h1 class="text-3xl font-black text-center text-main-600 mt-8">{{ value.namePlan }}</h1>
						<h2 class="text-6xl font-black text-center text-main-700 mb-8">{{ value.pricing }} Cop</h2>
						<div
							class="card__info__meta flex-2 bg-main-600 pt-8 rounded-t-4xl rounded-b-2xl p-8 text-white-app text-[18px]">
							<p class="text-pretty mb-10 ">{{ value.describePlan }}</p>
							<ul class="mb-20">
								<li v-for="list in value.beneficios">
									<div class="flex gap-2  items-center">
										<component :is="list.icon" class="h-8 w-8" />
										<p>{{ list.text }}</p>
									</div>
								</li>


							</ul>

							<div class="card__info__footer flex justify-center">
								<a href="#" class="botton__link flex gap-2">Obtener plan
									<ArrowUpRightIcon class="h-8 w-8" />
								</a>
							</div>
						</div>
					</div>
				</div>


			</section>
		</section>
	</section>
</template>

<script setup>
import { ref } from 'vue';

import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import { XCircleIcon } from "@heroicons/vue/20/solid";

import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";


const princingsEntrenamientos = ref([
	{
		namePlan: 'Plan Full',
		pricing: '220.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'lunes a sábado'
			},
			{
				icon: CheckCircleIcon,
				text: 'Máximo 10 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guia profesional en cada sesion'
			},
		]
	},
	{
		namePlan: 'Entrenamiento Pro',
		pricing: '200.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'lunes a viernes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Máximo 10 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guia profesional en cada sesion'
			},
		]
	},
	{
		namePlan: 'Entrenamiento Light',
		pricing: '155.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '3 veces a la semana'
			},
			{
				icon: CheckCircleIcon,
				text: 'Máximo 10 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guia profesional en cada sesion'
			},
		]
	},
]);

const pricingsFisio = ref([
	{
		namePlan: 'Plan basico',
		pricing: '500.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '10 sesiones'
			},
			{
				icon: CheckCircleIcon,
				text: 'Máximo 3 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guiada por profesional'
			},
		]
	},
	{
		namePlan: 'plan plus',
		pricing: '880.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '20 sesiones'
			},
			{
				icon: CheckCircleIcon,
				text: 'Maximo 3 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guiada por profesional'
			},
		]
	},
	{
		namePlan: 'Plan pro',
		pricing: '750.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '15 Sesiones'
			},
			{
				icon: CheckCircleIcon,
				text: 'Máximo 3 personas'
			},
			{
				icon: CheckCircleIcon,
				text: 'Guiada por profesional'
			},
		]
	},
])

const pricingsPresoterapia = ref([
	{
		namePlan: 'Plan basico',
		pricing: '300.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: XCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
		]
	},
	{
		namePlan: 'Plan Premium',
		pricing: '300.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: XCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
		]
	},
	{
		namePlan: 'plan basico',
		pricing: '300.000',
		describePlan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab natus mollitia vero, non voluptatem autem unde voluptas et aperiam?',
		linkPlan: 'google.com',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: XCircleIcon,
				text: 'Mansajes'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mansajes'
			},
		]
	},
])

const datosPrincipales = ref(pricingsFisio.value)


// seleccionamos los precios segun
const princingsInfo = (e) => {

	if (e === 'profesional') {
		datosPrincipales.value = pricingsPresoterapia.value
		return;
	}
	if (e === 'fisioterapia') {
		datosPrincipales.value = pricingsFisio.value
		return;
	}
	if (e === 'masoterapia') {
		datosPrincipales.value = princingsEntrenamientos.value
		return;
	}

}


</script>

<style scoped>
/* poner mas visualmente el precios más utilizado */
@media (width > 1024px) {
	.card-pricings:nth-child(2) {
		transform: translateY(-5rem);
	}
}

/* boton card precios */
.botton__link {
	padding-left: 3.3rem;
	padding-right: 3.3rem;
	padding-bottom: 1.6rem;
	padding-top: 1.6rem;
	border-radius: 999px;
	background: var(--color-main-200);
	border: none;
	color: black;
	font-family: inherit;
	text-align: center;
	cursor: pointer;
	transition: 0.4s;
}

.botton__link:hover {
	box-shadow: 7px 5px 56px -14px #C3D900;
}

.botton__link:active {
	transform: scale(0.97);
	box-shadow: 7px 5px 56px -10px #C3D900;
}
</style>
