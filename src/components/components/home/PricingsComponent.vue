<template>
	<section class=" container__pricings__hero mt-40 bg-white-app p-4" id="precios">
		<span class="title-section mb-10">nuestros precios</span>
		<h2 class="text-title font-bold border-dotted border-main-300 border-b-2 text-center text-main-700">
			Nuestros increíbles programas
		</h2>


		<section class="container__pricings__titles ">
			<section class="pricings__services mt-10 mb-40">
				<button class="services__button" :class="{ active: activeTab === 'Plancortisolout' }"
					@click="pricingsInfo('Plancortisolout')">
					<span class="tab__icon">
						<Hand />
					</span>
					<span>Plan cortisol out</span>
				</button>
				<button class="services__button" :class="{ active: activeTab === 'Planseniorfit' }"
					@click="pricingsInfo('Planseniorfit')">
					<span class="tab__icon">
						<Bone />
					</span>
					<span>Plan senior fit</span>
				</button>
				<button class="services__button" :class="{ active: activeTab === 'Planfisioplus' }"
					@click="pricingsInfo('Planfisioplus')">
					<span class="tab__icon">
						<BicepsFlexed />
					</span>
					<span>Plan fisioplus</span>
				</button>
				<button class="services__button" :class="{ active: activeTab === 'PlanMenosPesoPro' }"
					@click="pricingsInfo('PlanMenosPesoPro')">
					<span class="tab__icon">
						<BicepsFlexed />
					</span>
					<span>Plan Menos Peso Pro</span>
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
import { BicepsFlexed, Bone, Hand } from 'lucide-vue-next';


const PlanCortisolOut = ref([
	{
		namePlan: 'Plan Cortisol Out',
		pricing: '240.000',
		describePlan: 'Membresía mensual con acceso abierto a sesiones diarias de entrenamiento funcional en grupo. Diseñado para mejorar tu bienestar físico y mental mientras reduces el estrés y fortaleces tu cuerpo.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'Sesiones diarias de entrenamiento funcional'
			},
			{
				icon: CheckCircleIcon,
				text: '2 ebook de autocuidado y prevención'
			},
			{
				icon: CheckCircleIcon,
				text: '4 videos personalizados para entrenar en casa'
			},
			{
				icon: CheckCircleIcon,
				text: 'Masaje descontracturante de espalda (30 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Sesión de reflexología (15 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Incluye valoración inicial'
			},
			{
				icon: CheckCircleIcon,
				text: 'Contrato de continuidad a 6 meses'
			},
		]
	},
]);

const PlanSeniorFit = ref([
	{
		namePlan: 'Plan Senior Fit',
		pricing: '300.000',
		describePlan: 'Membresía integral enfocada en el bienestar, movilidad y prevención física mediante entrenamiento funcional y fisioterapia preventiva.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: 'Sesiones diarias de entrenamiento funcional'
			},
			{
				icon: CheckCircleIcon,
				text: '4 sesiones de fisioterapia preventiva'
			},
			{
				icon: CheckCircleIcon,
				text: '2 ebook de autocuidado y prevención'
			},
			{
				icon: CheckCircleIcon,
				text: '4 videos personalizados para entrenar en casa'
			},
			{
				icon: CheckCircleIcon,
				text: 'Masaje descontracturante de espalda (30 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Sesión de reflexología (15 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Incluye valoración inicial'
			},
			{
				icon: CheckCircleIcon,
				text: 'Contrato de continuidad a 6 meses'
			},
		]
	},
]);

const PlanFisioplus = ref([
	{
		namePlan: 'Plan Fisioplus',
		pricing: '900.000',
		describePlan: 'Programa intensivo enfocado en recuperación física, fortalecimiento y bienestar integral mediante fisioterapia personalizada y entrenamiento funcional.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '15 sesiones de fisioterapia 1 a 1'
			},
			{
				icon: CheckCircleIcon,
				text: '5 sesiones de entrenamiento funcional en grupo'
			},
			{
				icon: CheckCircleIcon,
				text: '2 ebook de autocuidado y prevención'
			},
			{
				icon: CheckCircleIcon,
				text: '4 videos personalizados para entrenar en casa'
			},
			{
				icon: CheckCircleIcon,
				text: 'Masaje descontracturante de espalda (30 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Sesión de reflexología (15 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Kit de bienestar incluido'
			},
			{
				icon: CheckCircleIcon,
				text: 'Incluye valoración inicial'
			},
		]
	},
]);

const PlanMenosPesoPro = ref([
	{
		namePlan: 'Plan Menos Peso Pro',
		pricing: '1.400.000',
		describePlan: 'Programa especializado para pérdida de peso, combinando fisioterapia, entrenamiento funcional, nutrición y herramientas de bienestar emocional.',
		linkPlan: 'https://wa.link/prxrs5',
		beneficios: [
			{
				icon: CheckCircleIcon,
				text: '12 sesiones de fisioterapia 1 a 1'
			},
			{
				icon: CheckCircleIcon,
				text: '2 meses de entrenamiento funcional en grupo'
			},
			{
				icon: CheckCircleIcon,
				text: 'Valoración por nutricionista'
			},
			{
				icon: CheckCircleIcon,
				text: '2 ebook de autocuidado y prevención'
			},
			{
				icon: CheckCircleIcon,
				text: '4 videos personalizados para entrenar en casa'
			},
			{
				icon: CheckCircleIcon,
				text: '2 sesiones de drenaje linfático'
			},
			{
				icon: CheckCircleIcon,
				text: '3 sesiones de hipnosis en video'
			},
			{
				icon: CheckCircleIcon,
				text: 'Autoestima, motivación y control de ansiedad'
			},
			{
				icon: CheckCircleIcon,
				text: '2 masajes descontracturantes de espalda'
			},
			{
				icon: CheckCircleIcon,
				text: '2 sesiones de reflexología (15 min)'
			},
			{
				icon: CheckCircleIcon,
				text: 'Incluye valoración inicial'
			},
			{
				icon: CheckCircleIcon,
				text: 'Kit de bienestar gratis'
			},
		]
	},
]);

const datosPrincipales = ref(PlanCortisolOut.value)
const activeTab = ref('Plancortisolout')

// seleccionamos los precios segun
const pricingsInfo = (e) => {
	activeTab.value = e

	if (e === 'Plancortisolout') {
		datosPrincipales.value = PlanCortisolOut.value
		return;
	}
	if (e === 'Planseniorfit') {
		datosPrincipales.value = PlanSeniorFit.value
		return;
	}
	if (e === 'Planfisioplus') {
		datosPrincipales.value = PlanFisioplus.value
		return;
	}

	if (e === 'PlanMenosPesoPro') {
		datosPrincipales.value = PlanMenosPesoPro.value
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
