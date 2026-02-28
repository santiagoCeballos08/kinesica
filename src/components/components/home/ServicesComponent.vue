<script setup>
import { onMounted, onUnmounted, ref, nextTick, reactive } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// importamos los datos de los servicios
import { servicesData } from '@/data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const horizontalSection = ref(null);
const scrollContainer = ref(null);
const progressBar = ref(null);
const isMobile = ref(typeof window !== 'undefined' && window.innerWidth <= 768);
let ctx = null;

// ─ Slider reactivo por servicio ─
// Mapea service.id → índice activo de la característica visible
const activeSlides = reactive({});
const sliderIntervals = [];

function initSliders() {
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
			const indicadores = panel.querySelectorAll('.indicador');
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
	<section ref="horizontalSection" class="relative overflow-hidden" id="services">

		<!-- Barra de progreso horizontal -->
		<div class="progress-track">
			<div ref="progressBar" class="progress-fill"></div>
		</div>

		<div ref="scrollContainer" class="flex w-max h-screen">
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

						<!-- Tag de servicio -->
						<!-- <span class="service-tag">Servicio {{ String(idx + 1).padStart(2, '0') }}</span> -->

						<!-- Título con wrapper para reveal -->
						<div class="title-reveal-wrapper overflow-hidden">
							<h2 v-html="service.title" class="card__info__title font-bold leading-tight"></h2>
						</div>

						<!-- Divisor animado -->
						<div class="title-divider"></div>

						<!-- Descripción -->
						<p class="card__desc leading-relaxed text-gray-300">
							{{ service.description }}
						</p>

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

						<!-- Indicadores móvil -->
						<div class="indicadores lg:hidden">
							<div class="indicador" :class="{ activo: (activeSlides[service.id] ?? 0) === i }"
								v-for="(_, i) in service.characteristics" :key="i" @click="goToSlide(service.id, i)">
							</div>
						</div>

						<!-- Botón -->
						<a :href="service.uri" class="boton-contacto">
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
/* ── Layout base ───────────────────────── */
.contenct__service {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	position: relative;
	overflow: hidden;
	background: radial-gradient(ellipse 80% 60% at 60% 50%, #0f2926 0%, #0a0a0a 70%);
}

/* ── Grid principal ────────────────────── */
.card__services {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	gap: 1.6rem;
	width: 92%;
	max-width: 1500px;
	margin-inline: auto;
	align-items: center;
}

/* ── Wrapper imagen ────────────────────── */
.card__img-wrapper {
	width: 100%;
}

/* ── Info column ───────────────────────── */
.card__info {
	width: 100%;
}

/* ── Orbe de fondo ─────────────────────── */
.bg-orb {
	position: absolute;
	inset: 0;
	background: radial-gradient(ellipse 55% 55% at 65% 45%, rgba(192, 231, 225, 0.07) 0%, transparent 70%);
	pointer-events: none;
}

/* ── Número decorativo ─────────────────── */
.panel-number-bg {
	position: absolute;
	top: 50%;
	right: -2rem;
	transform: translateY(-50%);
	font-size: clamp(12rem, 25vw, 22rem);
	font-weight: 900;
	line-height: 1;
	color: transparent;
	-webkit-text-stroke: 1px rgba(192, 231, 225, 0.06);
	pointer-events: none;
	user-select: none;
	letter-spacing: -0.05em;
}

/* ── Imagen ────────────────────────────── */
.card__img {
	box-shadow: 0 0 0 1px rgba(192, 231, 225, 0.12), 0 24px 60px rgba(0, 0, 0, 0.55);
	transition: box-shadow 0.4s ease;
	aspect-ratio: 16/9;
}

.card__img img {
	height: 100%;
	width: 100%;
}

.card__img:hover {
	box-shadow: 0 0 0 1px rgba(192, 231, 225, 0.35), 0 24px 70px rgba(0, 0, 0, 0.6), 0 0 40px rgba(192, 231, 225, 0.1);
}

.img-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(135deg, rgba(192, 231, 225, 0.04) 0%, transparent 60%);
	z-index: 1;
	pointer-events: none;
	border-radius: inherit;
}

/* ── Tag de servicio ───────────────────── */
.service-tag {
	display: inline-block;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: #c0e7e1;
	background: rgba(192, 231, 225, 0.08);
	border: 1px solid rgba(192, 231, 225, 0.2);
	padding: 0.3rem 0.85rem;
	border-radius: 999px;
	margin-bottom: 0.6rem;
	width: fit-content;
}

/* ── Título ────────────────────────────── */
.card__info__title {
	margin-bottom: 0.5rem;
	color: #fff;
	font-size: clamp(var(--text-title), 4.5vw, 6.5rem);
}

/* ── Divisor ───────────────────────────── */
.title-divider {
	width: 3.5rem;
	height: 3px;
	background: linear-gradient(90deg, #c0e7e1, transparent);
	border-radius: 2px;
	margin: 0.6rem 0 0.8rem;
}

/* ── Características ───────────────────── */
.card__info__sensibilitys {
	position: relative;
	max-height: 15rem;
	height: 13rem;
	overflow: hidden;
	margin-bottom: 0.8rem;
}

.caracteristica {
	gap: 1.4rem;
	padding: 1.2rem 1.6rem;
	background: rgba(255, 255, 255, 0.04);
	border: 1px solid rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(10px);
	transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.caracteristica:hover {
	background: rgba(192, 231, 225, 0.08);
	border-color: rgba(192, 231, 225, 0.3);
	transform: translateY(-2px);
	box-shadow: 0 8px 24px rgba(192, 231, 225, 0.07);
}

.caracteristica__icon {
	width: 4.8rem;
	height: 4.8rem;
	padding: 1rem;
	background: rgba(192, 231, 225, 0.12);
	color: #c0e7e1;
	transition: background 0.3s ease;
}

.caracteristica:hover .caracteristica__icon {
	background: rgba(192, 231, 225, 0.22);
}

.caracteristica__description h3 {
	font-size: 2rem;
	text-align: center;
	line-height: 1.3;
	margin-bottom: 0.2rem;
}

.caracteristica__description p {
	font-size: 1.4rem;
}

/* ── Botón ─────────────────────────────── */
.btn-icon {
	width: 2rem;
	height: 2rem;
	flex-shrink: 0;
}

.boton-contacto {
	display: inline-flex;
	align-items: center;
	gap: 0.8rem;
	padding: 1.2rem 2.4rem;
	border-radius: 999px;
	font-weight: 600;
	font-size: 1.8rem;
	letter-spacing: 0.03em;
	color: #0a0a0a;
	background: linear-gradient(135deg, #c0e7e1 0%, #8ecec5 100%);
	border: none;
	cursor: pointer;
	transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
	text-decoration: none;
	box-shadow: 0 4px 20px rgba(192, 231, 225, 0.3);
	align-self: flex-start;
}

.boton-contacto:hover {
	transform: translateY(-2px) scale(1.02);
	box-shadow: 0 8px 32px rgba(192, 231, 225, 0.45);
	filter: brightness(1.05);
}

.boton-contacto:active {
	transform: translateY(0) scale(0.98);
}

/* ── Barra de progreso ─────────────────── */
.progress-track {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 3px;
	background: rgba(255, 255, 255, 0.08);
	z-index: 50;
}

.progress-fill {
	height: 100%;
	background: linear-gradient(90deg, #c0e7e1, #8ecec5);
	transform-origin: left center;
	transform: scaleX(0);
	border-radius: 0 2px 2px 0;
	box-shadow: 0 0 10px rgba(192, 231, 225, 0.6);
}

/* ── Transición slide-card (móvil) ───────── */
.slide-card-enter-active,
.slide-card-leave-active {
	transition: opacity 0.3s ease, transform 0.35s ease;
}

.slide-card-enter-from {
	opacity: 0;
	transform: translateX(30px);
}

.slide-card-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}

/* ── Indicadores móvil ─────────────────── */
.indicadores {
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	margin-block: 0.75rem;
}

.indicador {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.25);
	cursor: pointer;
	transition: all 0.3s;
}

.indicador.activo {
	background: #c0e7e1;
	width: 28px;
	border-radius: 4px;
	box-shadow: 0 0 8px rgba(192, 231, 225, 0.5);
}

/* ── Descripción ────────────────────────── */
.card__desc {
	font-size: clamp(1.4rem, 1.5vw, 1.8rem);
	margin-bottom: 1rem;
}

/* ── Responsive ────────────────────────── */
/* Desktop: side-by-side, large image */
@media (width >=1024px) {
	.card__services {
		grid-template-columns: 58% 1fr;
		grid-template-rows: 1fr;
		gap: 4rem;
		align-items: center;
	}

	.card__img {
		aspect-ratio: 4/3;
	}

	.card__info__sensibilitys {
		max-height: none;
		height: auto;
		margin-bottom: 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.8rem;
	}

	.caracteristica {
		gap: 1rem;
		padding: 0.9rem 1.2rem;
	}

	.caracteristica__icon {
		width: 4rem;
		height: 4rem;
		padding: 0.8rem;
	}

	.caracteristica__description h3 {
		font-size: 1.8rem;
		text-align: initial;
	}

	.caracteristica__description p {
		font-size: 1.3rem;
	}

	.card__info__title {
		font-size: clamp(3.5rem, 3.5vw, 5.5rem);
	}

	.card__desc {
		font-size: clamp(1.6rem, 1.4vw, 2rem);
	}

	.indicador {
		display: none;
	}
}

/* Mobile: stacked, image on top */
@media (width <=768px) {
	.contenct__service {
		align-items: flex-start;
		padding-top: 0;
	}

	.card__services {
		width: 100%;
		grid-template-rows: 38vh 1fr;
		gap: 0;
		height: 100vh;
		align-items: start;
	}

	.card__img-wrapper {
		width: 100%;
	}

	.card__img {
		border-radius: 0;
		aspect-ratio: unset;
		height: 38vh;
		box-shadow: none;
	}

	/* Fade gradient at bottom of image into content */
	.card__img::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60%;
		background: linear-gradient(to bottom, transparent, #0a0a0a);
		z-index: 2;
	}

	.card__info {
		padding: 1.8rem 2.2rem 1.4rem;
		overflow: hidden;
		height: 62vh;
		justify-content: space-between;
	}

	.service-tag {
		font-size: 1.1rem;
		padding: 0.25rem 0.7rem;
		margin-bottom: 0.4rem;
	}

	.card__info__title {
		font-size: clamp(2.8rem, 6vw, 4rem);
	}

	.title-divider {
		margin: 0.4rem 0 0.6rem;
		width: 2.5rem;
	}

	.card__desc {
		font-size: 1.4rem;
		margin-bottom: 0.6rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card__info__sensibilitys {
		height: auto;
		max-height: none;
		margin-bottom: 0.4rem;
	}

	.caracteristica {
		width: 100%;
		gap: 1.2rem;
		padding: 1rem 1.4rem;
	}

	.caracteristica__icon {
		width: 4rem;
		height: 4rem;
		padding: 0.8rem;
	}

	.caracteristica__description h3 {
		font-size: 1.8rem;
	}

	.caracteristica__description p {
		font-size: 1.3rem;
	}

	.boton-contacto {
		font-size: 1.5rem;
		padding: 1rem 2rem;
	}

	.btn-icon {
		width: 1.6rem;
		height: 1.6rem;
	}

	.panel-number-bg {
		font-size: 40vw;
		right: -1rem;
		opacity: 0.4;
		top: 38vh;
	}

	.indicadores {
		margin-block: 0.4rem;
	}
}
</style>
