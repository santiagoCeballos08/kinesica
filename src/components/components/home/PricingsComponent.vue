<template>
	<section class=" container__pricings__hero mt-40 bg-white-app p-4" id="precios">
		<span class="title-section mb-10">nuestros precios</span>
		<h2 class="text-title font-bold border-dotted border-main-300 border-b-2 text-center text-main-700">
			Nuestros increíbles precios
		</h2>
		<section class="container__pricings__titles ">
			<section class="pricings__services mt-10 mb-40">
				<button
					class="services__button"
					:class="{ active: activeTab === 'terapiaManual' }"
					@click="pricingsInfo('terapiaManual')">
					<span class="tab__icon">
						<Hand />
					</span>
					<span>Terapia manual</span>
				</button>
				<button
					class="services__button"
					:class="{ active: activeTab === 'fisioterapia' }"
					@click="pricingsInfo('fisioterapia')">
					<span class="tab__icon"><Bone/></span>
					<span>Fisioterapia General</span>
				</button>
				<button
					class="services__button"
					:class="{ active: activeTab === 'entrenamiento' }"
					@click="pricingsInfo('entrenamiento')">
					<span class="tab__icon">
						<BicepsFlexed />
					</span>
					<span>Entrenamiento</span>
				</button>
			</section>
		</section>

		<!-- precios de proyectos -->
		<section class="container__pricings__cards__hero " v-fade-in>
			<section
				class="container__pricings__cards min-h-[70vh] flex flex-col lg:flex-row gap-8 items-center lg:justify-center max-w-app mx-auto">

				<!-- CARD DE PRECIOS -->
				<div v-for="value in datosPrincipales" :key="value.namePlan"
					class="card-pricings hover:scale-102 transition-all  max-w-[40rem] min-h-[60rem] bg-linear-45 from-main-50 via-main-50 to-main shadow-md  rounded-4xl p-4"
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
								<a :href="value.linkPlan" class="botton__link flex gap-2">Obtener plan
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
import { BicepsFlexed, Bone, Hand} from 'lucide-vue-next';


const pricingsEntrenamientos = ref([
	{
		namePlan: 'Plan Full',
		pricing: '220.000',
		describePlan: 'Alcanza tu máximo rendimiento con nuestro plan de entrenamiento más completo. Sesiones diarias de lunes a sábado con guía profesional semipersonalizada. Grupos reducidos para garantizar atención de calidad y resultados óptimos.',
		linkPlan: 'https://wa.link/prxrs5',
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
				text: 'Guía profesional en cada sesión'
			},
		]
	},
	{
		namePlan: 'Entrenamiento Pro',
		pricing: '200.000',
		describePlan: 'Entrena de lunes a viernes con la guía de nuestros profesionales. Un plan diseñado para quienes buscan resultados reales con constancia y dedicación. Grupos reducidos para garantizar atención semipersonalizada y maximizar tu rendimiento.',
		linkPlan: 'https://wa.link/prxrs5',
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
				text: 'Guía profesional en cada sesión'
			},
		]
	},
	{
		namePlan: 'Entrenamiento Light',
		pricing: '155.000',
		describePlan: 'Entrena a tu ritmo con 3 sesiones semanales guiadas por profesionales. Ideal para quienes inician su camino fitness o buscan mantenerse activos sin sobreexigirse. Resultados reales con grupos reducidos y atención personalizada.',
		linkPlan: 'https://wa.link/prxrs5',
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
				text: 'Guía profesional en cada sesión'
			},
		]
	},
]);

const pricingsFisio = ref([
	{
		namePlan: 'Plan básico',
		pricing: '550.000',
		describePlan: 'Recupera tu movilidad y bienestar con sesiones de fisioterapia personalizadas. Nuestros profesionales utilizan técnicas avanzadas para aliviar el dolor, mejorar tu flexibilidad y acelerar tu recuperación. Tratamiento integral diseñado para tu salud y desempeño físico óptimo.',
		linkPlan: 'https://wa.link/prxrs5',
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
		describePlan: 'Maximiza tu recuperación con 20 sesiones de fisioterapia intensiva. Nuestros especialistas aplican técnicas avanzadas para resultados visibles. Plan diseñado para quienes buscan transformación completa de su movilidad y bienestar físico.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '20 sesiones'
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
		namePlan: 'Plan pro',
		pricing: '750.000',
		describePlan: 'Transforma tu recuperación con 15 sesiones de fisioterapia especializada. Nuestros expertos combinan técnicas innovadoras para maximizar tu rendimiento y acelerar resultados. El equilibrio perfecto entre intensidad y efectividad para quienes buscan resultados reales sin comprometer su bienestar.',
		linkPlan: 'https://wa.link/prxrs5',
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
		namePlan: 'Terapia Manual',
		pricing: '90.000',
		describePlan: 'Potencia tu bienestar con sesiones personalizadas de drenaje linfático y presoterapia. Reduce la retención de líquidos, mejora la circulación y recupera la ligereza en tus piernas. Tratamiento profesional diseñado para tu salud y confort.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '1 Sesión'
			},
			{
				icon: CheckCircleIcon,
				text: 'Drenaje Linfático Manual'
			},
			{
				icon: CheckCircleIcon,
				text: 'Mensaje descontracturante'
			},
			{
				icon: CheckCircleIcon,
				text: 'Presoterapia'
			},
		]
	},
	{
		namePlan: 'Terapia Manual Full',
		pricing: '405.000',
		describePlan: 'Disfruta de 5 sesiones completas de terapia manual con drenaje linfático y presoterapia. Ideal para tratamientos continuos que potencian resultados. Reduce la retención de líquidos, mejora la circulación y recupera el bienestar integral con sesiones semiprofesionales diseñadas para ti.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '5 sesiones'
			},
			{
				icon: CheckCircleIcon,
				text: 'Drenaje linfático manual'
			},

			{
				icon: CheckCircleIcon,
				text: 'Presoterapia'
			},
		]
	},
])

const datosPrincipales = ref(pricingsFisio.value)
const activeTab = ref('fisioterapia')

// seleccionamos los precios segun
const pricingsInfo = (e) => {
	activeTab.value = e

	if (e === 'terapiaManual') {
		datosPrincipales.value = pricingsPresoterapia.value
		return;
	}
	if (e === 'fisioterapia') {
		datosPrincipales.value = pricingsFisio.value
		return;
	}
	if (e === 'entrenamiento') {
		datosPrincipales.value = pricingsEntrenamientos.value
		return;
	}
}


</script>

<style scoped>
/* ── Tabs ──────────────────────────────── */
.pricings__services {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	margin-top: 2.5rem;
	margin-bottom: 6rem;
}

.services__button {
	display: inline-flex;
	align-items: center;
	gap: 0.6rem;
	padding: 1rem 2.4rem;
	border-radius: 999px;
	border: 2px solid var(--color-main-400, #8ecec5);
	background: transparent;
	color: var(--color-main-700, #1a5c56);
	font-size: 1.6rem;
	font-weight: 600;
	cursor: pointer;
	position: relative;
	transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
}

.services__button:hover {
	background: var(--color-main-100, #e8f7f5);
	border-color: var(--color-main-600, #2d8a82);
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(46, 138, 130, 0.15);
}

.services__button.active {
	background: var(--color-main-600, #2d8a82);
	border-color: var(--color-main-600, #2d8a82);
	color: #fff;
	box-shadow: 0 8px 24px rgba(46, 138, 130, 0.35);
	transform: translateY(-2px);
}

.services__button.active:hover {
	background: var(--color-main-700, #1a5c56);
	border-color: var(--color-main-700, #1a5c56);
}

.tab__icon {
	font-size: 1.8rem;
	line-height: 1;
}
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
