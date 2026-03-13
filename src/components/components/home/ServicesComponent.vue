<script setup>
import { onMounted, onUnmounted, ref, nextTick, reactive } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// importamos los datos de los servicios
import { servicesData } from '@/data/servicesData';
import { useUIStore } from '@/stores/uiStore';

gsap.registerPlugin(ScrollTrigger);

const horizontalSection = ref(null);
const scrollContainer = ref(null);
const progressBar = ref(null);
const isMobile = ref(typeof window !== 'undefined' && window.innerWidth <= 768);
let ctx = null;

const uiStore = useUIStore();

// ─ Slider reactivo por servicio ─
// Mapea service.id → índice activo de la característica visible
const activeSlides = reactive({});
const sliderIntervals = [];

// ─ Descripción expandida por servicio (móvil) ─
const expandedDesc = reactive({});

function toggleExpandedDesc(serviceId) {
	expandedDesc[serviceId] = !expandedDesc[serviceId];
}

function initSliders() {
	servicesData.forEach((service) => {
		expandedDesc[service.id] = false;
	});

	if (window.innerWidth > 768) return;

	servicesData.forEach((service) => {
		activeSlides[service.id] = 0;

		const interval = setInterval(() => {
			activeSlides[service.id] =
				(activeSlides[service.id] + 1) % service.characteristics.length;
		}, 3500);

		sliderIntervals.push(interval);
	});
}

function goToSlide(serviceId, index) {
	activeSlides[serviceId] = index;
	// Reinicia el intervalo de ese servicio al tocar un indicador
	const pos = servicesData.findIndex((s) => s.id === serviceId);
	if (pos !== -1) {
		clearInterval(sliderIntervals[pos]);
		sliderIntervals[pos] = setInterval(() => {
			activeSlides[serviceId] =
				(activeSlides[serviceId] + 1) % servicesData[pos].characteristics.length;
		}, 3500);
	}
}

onMounted(async () => {
	await nextTick();
	initSliders();

	if (isMobile.value) {
		// ── Mobile: scroll vertical con animaciones laterales ──
		ctx = gsap.context(() => {
			const panels = gsap.utils.toArray('.contenct__service');

			panels.forEach((panel, idx) => {
				const fromLeft = idx % 2 === 0;
				const imgEl = panel.querySelector('.card__img img');
				const titleWrapper = panel.querySelector('.title-reveal-wrapper');
				const divider = panel.querySelector('.title-divider');
				const text = panel.querySelector('.card__desc');
				const sensibilitys = panel.querySelector('.card__info__sensibilitys');
				const boton = panel.querySelector('.boton-contacto');

				// Entrada del panel completo desde un lado
				gsap.from(panel, {
					x: fromLeft ? -60 : 60,
					opacity: 0,
					duration: 0.85,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						start: 'top 88%',
						toggleActions: 'play none none reverse',
					},
				});

				// Imagen con blur
				if (imgEl) {
					gsap.fromTo(
						imgEl,
						{ scale: 1.15, opacity: 0, filter: 'blur(10px)' },
						{
							scale: 1,
							opacity: 1,
							filter: 'blur(0px)',
							duration: 1,
							ease: 'power2.out',
							scrollTrigger: {
								trigger: panel,
								start: 'top 85%',
								toggleActions: 'play none none reverse',
							},
						},
					);
				}

				// Título + divisor
				const textEls = [titleWrapper, divider].filter(Boolean);
				if (textEls.length) {
					gsap.from(textEls, {
						y: 30,
						opacity: 0,
						stagger: 0.1,
						duration: 0.75,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: panel,
							start: 'top 80%',
							toggleActions: 'play none none reverse',
						},
					});
				}

				// Descripción
				if (text) {
					gsap.from(text, {
						y: 20,
						opacity: 0,
						duration: 0.7,
						delay: 0.1,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: panel,
							start: 'top 78%',
							toggleActions: 'play none none reverse',
						},
					});
				}

				// Características
				if (sensibilitys) {
					gsap.from(sensibilitys, {
						x: fromLeft ? -30 : 30,
						opacity: 0,
						duration: 0.7,
						delay: 0.15,
						ease: 'power3.out',
						scrollTrigger: {
							trigger: panel,
							start: 'top 75%',
							toggleActions: 'play none none reverse',
						},
					});
				}

				// Botón
				if (boton) {
					gsap.from(boton, {
						y: 20,
						opacity: 0,
						scale: 0.95,
						duration: 0.7,
						ease: 'back.out(1.4)',
						scrollTrigger: {
							trigger: panel,
							start: 'top 72%',
							toggleActions: 'play none none reverse',
						},
					});
				}
			});
		}, horizontalSection.value);
		return;
	}

	// ── Desktop: scroll horizontal ──
	ctx = gsap.context(() => {
		const panels = gsap.utils.toArray('.contenct__service');
		const getTotalWidth = () => scrollContainer.value.scrollWidth - window.innerWidth;

		// Scroll Horizontal Principal
		const scrollTween = gsap.to(scrollContainer.value, {
			x: () => -getTotalWidth(),
			ease: 'none',
			scrollTrigger: {
				trigger: horizontalSection.value,
				pin: true,
				scrub: 1,
				start: 'top top',
				end: () => `+=${getTotalWidth()}`,
				invalidateOnRefresh: true,
				onEnter: () => { uiStore.isServicesScrollActive = true; },
				onLeave: () => { uiStore.isServicesScrollActive = false; },
				onEnterBack: () => { uiStore.isServicesScrollActive = true; },
				onLeaveBack: () => { uiStore.isServicesScrollActive = false; },
				onUpdate: (self) => {
					// Barra de progreso
					if (progressBar.value) {
						gsap.set(progressBar.value, { scaleX: self.progress });
					}
				},
			},
		});

		panels.forEach((panel) => {
			const imgEl = panel.querySelector('.card__img img');
			const imgWrapper = panel.querySelector('.card__img');
			const titleWrapper = panel.querySelector('.title-reveal-wrapper');
			const tagEl = panel.querySelector('.service-tag');
			const text = panel.querySelector('.card__desc');
			const sensibilitys = panel.querySelector('.card__info__sensibilitys');
			const boton = panel.querySelector('.boton-contacto');
			const elementos = panel.querySelectorAll('.caracteristica');
			const inidicators = panel.querySelectorAll('.indicador');
			const numBg = panel.querySelector('.panel-number-bg');
			const divider = panel.querySelector('.title-divider');

			// --- Número de fondo ---
			if (numBg) {
				gsap.from(numBg, {
					x: 80,
					opacity: 0,
					duration: 1.2,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 75%',
						toggleActions: 'play none none reverse',
					},
				});
			}

			// --- Animación de Imagen ---
			if (imgEl && imgWrapper) {
				gsap.fromTo(
					imgEl,
					{ scale: 1.35, opacity: 0, filter: 'blur(12px)' },
					{
						scale: 1.08,
						opacity: 1,
						filter: 'blur(0px)',
						duration: 1.1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: panel,
							containerAnimation: scrollTween,
							start: 'left 70%',
							toggleActions: 'play none none reverse',
						},
					},
				);

				// Parallax sutil en la imagen
				gsap.fromTo(
					imgEl,
					{ xPercent: -10 },
					{
						xPercent: 10,
						ease: 'none',
						scrollTrigger: {
							trigger: imgWrapper,
							containerAnimation: scrollTween,
							start: 'left right',
							end: 'right left',
							scrub: true,
						},
					},
				);

				// Borde luminoso en la imagen
				gsap.from(imgWrapper, {
					boxShadow: '0 0 0px rgba(192,231,225,0)',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 70%',
						toggleActions: 'play none none reverse',
					},
				});
			}

			// --- Tag + título + divisor ---
			const textEls = [tagEl, titleWrapper, divider].filter(Boolean);
			if (textEls.length) {
				gsap.from(textEls, {
					y: 40,
					opacity: 0,
					autoAlpha: 0,
					stagger: 0.12,
					duration: 0.9,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 65%',
						toggleActions: 'play none none reverse',
					},
				});
			}

			// --- Descripción ---
			if (text) {
				gsap.from(text, {
					y: 30,
					opacity: 0,
					autoAlpha: 0,
					duration: 0.8,
					delay: 0.15,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 65%',
						toggleActions: 'play none none reverse',
					},
				});
			}

			// --- Características: stagger desde abajo (solo desktop) ---
			if (sensibilitys && window.innerWidth > 768) {
				// Fijamos estado inicial explícitamente para evitar que GSAP
				// deje elementos atascados en el estado FROM con scroll horizontal
				gsap.set(elementos, { y: 45, opacity: 0, visibility: 'hidden' });

				gsap.to(elementos, {
					y: 0,
					opacity: 1,
					visibility: 'inherit',
					stagger: 0.1,
					duration: 0.75,
					ease: 'power3.out',
					clearProps: 'transform,opacity,visibility',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 70%',
						toggleActions: 'play none none none',
					},
				});
			}

			// --- Botón ---
			if (boton) {
				gsap.from(boton, {
					y: 25,
					opacity: 0,
					autoAlpha: 0,
					scale: 0.95,
					duration: 0.8,
					ease: 'back.out(1.4)',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 55%',
						toggleActions: 'play none none reverse',
					},
				});
			}

			// Carrusel GSAP eliminado — el slider móvil es Vue reactivo (ver template)
		});
	}, horizontalSection.value);
});

onUnmounted(() => {
	sliderIntervals.forEach(clearInterval);
	if (ctx) ctx.revert();
});
</script>

<template>
	<section ref="horizontalSection" class="relative mb-6" :class="{ 'overflow-hidden': !isMobile }" id="services">

		<!-- Barra de progreso horizontal (solo desktop) -->
		<div v-if="!isMobile" class="progress-track">
			<div ref="progressBar" class="progress-fill"></div>
		</div>

		<div ref="scrollContainer" :class="isMobile ? 'flex flex-col w-full' : 'flex w-max h-screen'">
			<!-- panel de seccion de servicios -->
			<section class="contenct__service text-white" v-for="(service, idx) in servicesData" :key="service.id">
				<!-- Número decorativo de fondo -->
				<span class="panel-number-bg" aria-hidden="true">{{ String(idx + 1).padStart(2, '0') }}</span>

				<!-- Orbe de luz de fondo -->
				<div class="bg-orb" aria-hidden="true"></div>

				<article class="card__services relative z-10">

					<!-- Imagen -->
					<div class="card__img-wrapper">
						<picture class="card__img w-full overflow-hidden rounded-2xl relative block">
							<div class="img-overlay"></div>
							<img :src="service.img" :alt="service.id" class="w-full h-full object-cover object-top" />
						</picture>
					</div>

					<!-- Contenido -->
					<div class="card__info flex flex-col">


						<!-- Título con wrapper para reveal -->
						<div class="title-reveal-wrapper overflow-hidden ">
							<h2 v-html="service.title" class="card__info__title font-bold leading-tight"></h2>
						</div>

						<!-- Divisor animado -->
						<div class="title-divider inline-block mb-10"></div>

						<!-- Descripción -->
						<div class="card__desc-wrapper">
							<p class="card__desc leading-relaxed text-gray-300"
								:class="{ 'card__desc--clamped': !expandedDesc[service.id] }"
								v-html="service.description">
							</p>
							<button class="btn-ver-mas mb-4" @click="toggleExpandedDesc(service.id)">
								<span>{{ expandedDesc[service.id] ? 'Ver menos' : 'Ver más' }}</span>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
									class="btn-ver-mas__icon" :class="{ rotated: expandedDesc[service.id] }">
									<path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
								</svg>
							</button>
						</div>

						<!-- Características -->
						<article class="card__info__sensibilitys relative">
							<!-- Desktop: todas visibles en grid -->
							<template v-if="!isMobile">
								<div class="caracteristica flex items-center rounded-2xl"
									v-for="(characteristic, index) in service.characteristics" :data-index="index">
									<component :is="characteristic.icon"
										class="caracteristica__icon flex-shrink-0 rounded-xl" />
									<div class="caracteristica__description">
										<h3 class="font-semibold text-white">{{ characteristic.title }}</h3>
										<p class="opacity-70">{{ characteristic.description }}</p>
									</div>
								</div>
							</template>

							<!-- Mobile: slider reactivo, una card a la vez -->
							<template v-else>
								<Transition name="slide-card" mode="out-in">
									<div :key="activeSlides[service.id]"
										class="caracteristica flex items-center rounded-2xl">
										<component :is="service.characteristics[activeSlides[service.id] ?? 0].icon"
											class="caracteristica__icon flex-shrink-0 rounded-xl" />
										<div class="caracteristica__description">
											<h3 class="font-semibold text-white">
												{{ service.characteristics[activeSlides[service.id] ?? 0].title }}
											</h3>
											<p class="opacity-70">
												{{ service.characteristics[activeSlides[service.id] ?? 0].description }}
											</p>
										</div>
									</div>
								</Transition>
							</template>
						</article>

						<!-- inidicators móvil -->
						<div class="inidicators lg:hidden ">
							<div class="indicador" :class="{ activo: (activeSlides[service.id] ?? 0) === i }"
								v-for="(_, i) in service.characteristics" :key="i" @click="goToSlide(service.id, i)">
							</div>
						</div>

						<!-- Botón -->
						<a :href="service.uri" target="_blanck" class="boton-contacto !self-center md:self-start">
							<span>Agendar Sesión</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								class="btn-icon">
								<path fill-rule="evenodd"
									d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
									clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</article>
			</section>
		</div>
	</section>
</template>

<style scoped>
@import url("../../styles/services.css");
</style>
