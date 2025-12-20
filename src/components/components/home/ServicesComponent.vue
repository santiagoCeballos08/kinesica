<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// icons personalizados
import zapIcon from '@/assets/icons/zapIcon.vue';
import ActivityIcon from '@/assets/icons/ActivityIcon.vue';
import ClockIcon from '@/assets/icons/ClockIcon.vue';
import { FaceSmileIcon } from '@heroicons/vue/24/outline';

gsap.registerPlugin(ScrollTrigger);

const horizontalSection = ref(null);
const scrollContainer = ref(null);
let ctx = null;

onMounted(async () => {
	await nextTick();

	ctx = gsap.context((self) => {
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
			}
		});

		panels.forEach((panel) => {
			const imgEl = panel.querySelector('.card__img img');
			// Importante: seleccionamos el contenedor de la imagen para el trigger del parallax
			const imgWrapper = panel.querySelector('.card__img');
			const title = panel.querySelector('.card__info__title');
			const text = panel.querySelector('p');
			const sensibilitys = panel.querySelector('.card__info__sensibilitys');
			const boton = panel.querySelector('.boton-contacto');
			const elementos = panel.querySelectorAll('.caracteristica')
			const indicadores = panel.querySelectorAll('.indicador')


			if (sensibilitys) {
				gsap.from(sensibilitys, {
					y: 50,
					opacity: 0,
					autoAlpha: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 50%',
						toggleActions: 'play none none reverse',
					}
				});
			}

			// --- Animación de Imagen ---
			if (imgEl && imgWrapper) {
				gsap.fromTo(imgEl,
					{
						scale: 1.4,
						opacity: 0,
						filter: 'blur(10px)',
						rotation: -5
					},
					{

						scale: 1.15,
						opacity: 1,
						filter: 'blur(0px)',
						rotation: 0,
						duration: 1,
						ease: 'power2.out',
						scrollTrigger: {
							trigger: panel,
							containerAnimation: scrollTween,
							start: 'left 60%',
							end: 'right 60%',
							toggleActions: 'play none none reverse',
							id: 'img-entry'
						}
					}
				);

				gsap.fromTo(imgEl,
					{
						xPercent: -15
					},
					{
						xPercent: 15,
						ease: 'none',
						scrollTrigger: {
							trigger: imgWrapper,
							containerAnimation: scrollTween,
							start: 'left right',
							end: 'right left',
							scrub: true,
						}
					}
				);
			}

			// --- Animación de Textos (Sin cambios) ---
			if (title || text) {
				gsap.from([title, text], {
					y: 50,
					opacity: 0,
					autoAlpha: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 50%',
						toggleActions: 'play none none reverse',
					}
				});
			}

			// animacion para el boton
			if (boton) {
				gsap.from(boton, {
					y: -50,
					opacity: 0,
					autoAlpha: 0,
					stagger: 0.1,
					duration: 0.8,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: scrollTween,
						start: 'left 50%',
						toggleActions: 'play none none reverse',
					}
				})
			}

			// if el tamaño de la pantalla es menos a 768px entonces se habilita el slider
			if (window.innerWidth < 768) {
				let indiceActual = 0;
				let intervalo;


				elementos.forEach((el, i) => {
					gsap.set(el, {
						x: i === 0 ? '0%' : '100%'
					});
				});

				function cambiarSlide(nuevoIndice) {
					if (nuevoIndice === indiceActual) return;

					// Detener intervalo
					if (intervalo) clearInterval(intervalo);

					const actual = elementos[indiceActual];
					const siguiente = elementos[nuevoIndice];

					// Actualizar indicadores
					indicadores[indiceActual].classList.remove('activo');
					indicadores[nuevoIndice].classList.add('activo');

					// Animación: el siguiente empuja al actual
					const tl = gsap.timeline({
						onComplete: () => {
							// Reiniciar posición del slide que salió
							gsap.set(actual, { x: '100%' });
							iniciarCarruselAutomatico();
						}
					});

					// El actual sale hacia la izquierda
					tl.to(actual, {
						x: '-100%',
						duration: 0.8,
						ease: 'power2.inOut'
					})
						// El siguiente entra desde la derecha simultáneamente
						.to(siguiente, {
							x: '0%',
							duration: 0.8,
							ease: 'power2.inOut'
						}, '<'); // '<' significa "al mismo tiempo que la animación anterior"

					indiceActual = nuevoIndice;
				}


				// Avanzar al siguiente slide
				function siguienteSlide() {
					const siguiente = (indiceActual + 1) % elementos.length;
					cambiarSlide(siguiente);
				}

				// Iniciar carrusel automático
				function iniciarCarruselAutomatico() {
					if (intervalo) clearInterval(intervalo);
					intervalo = setInterval(siguienteSlide, 4000);
				}

				// Event listeners para indicadores
				indicadores.forEach((indicador, index) => {
					indicador.addEventListener('click', () => {
						cambiarSlide(index);
					});
				});

				iniciarCarruselAutomatico();

			}

		});


	}, horizontalSection.value);
});

onUnmounted(() => {
	if (ctx) ctx.revert();
});
</script>

<template>
	<section ref="horizontalSection" class="relative overflow-hidden mb-4" id="services">
		<div ref="scrollContainer" class="flex w-max h-screen">

			<!-- panel de seccion de servicios -->
			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="/public/assets/presoTerapia.webp" alt="presoterapia"
							class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-6xl text-center lg:text-start lg:text-6xl font-bold mb-6">
							Qué es la <span class="text-main-400">Presoterapia</span>
						</h2>
						<p class="text-2lg lg:text-4xl leading-relaxed text-gray-300 mb-10">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus tenetur
							atque aperiam laboriosam.
						</p>
						<article
							class="card__info__sensibilitys relative lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 mb-10 flex flex-col">

							<!-- card informacion  -->
							<div class="caracteristica  flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="0">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl  h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 1</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="1">
								<activity-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 3 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="2">
								<clock-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 4</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="3">
								<FaceSmileIcon
									class="caracteristica__icon  size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 5 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>

						</article>

						<div class="indicadores lg:hidden">
							<div class="indicador activo"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
						</div>

						<a href="" class="boton-contacto">Agendar Sesión </a>
					</div>
				</article>
			</section>

			<!-- panel de seccion de serivicios -->
			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="/public/assets/presoTerapia.webp" alt="presoterapia"
							class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-6xl text-center lg:text-start lg:text-6xl font-bold mb-6">
							Qué es la <span class="text-main-400">Maso terapia</span>
						</h2>
						<p class="text-2lg lg:text-4xl leading-relaxed text-gray-300 mb-10">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus tenetur
							atque aperiam laboriosam.
						</p>
						<article
							class="card__info__sensibilitys relative lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 mb-10 flex flex-col">

							<!-- card informacion  -->
							<div class="caracteristica  flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="0">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 1</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="1">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 3 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="2">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 4</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="3">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 5 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>

						</article>

						<div class="indicadores lg:hidden">
							<div class="indicador activo"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
						</div>

						<a href="" class="boton-contacto">Agendar Sesión </a>
					</div>
				</article>
			</section>

			<!-- panel de seccion de serivicios -->
			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="/public/assets/presoTerapia.webp" alt="presoterapia"
							class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-6xl text-center lg:text-start lg:text-6xl font-bold mb-6">
							Qué es la <span class="text-main-400">Fisioterapia</span>
						</h2>
						<p class="text-2lg lg:text-4xl leading-relaxed text-gray-300 mb-10">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus tenetur
							atque aperiam laboriosam.
						</p>
						<article
							class="card__info__sensibilitys relative lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8 mb-10 flex flex-col">

							<!-- card informacion  -->
							<div class="caracteristica  flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="0">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 1</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="1">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 3 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="2">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 4</h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>
							<!-- card informacion  -->
							<div class="caracteristica flex items-center backdrop-blur-md bg-white/5 border border-white/30 p-2 lg:p-10 rounded-2xl gap-8"
								data-index="3">
								<zap-icon
									class="caracteristica__icon size-12 w-[50px]  bg-main/50 p-4 rounded-2xl h-auto lg:max-h-fit  lg:h-full" />
								<div class="caracteristica__description">
									<h3 class="text-4xl font-semibold">Estimulacion 5 </h3>
									<p class="opacity-80">Activacion de la circulacion sanguinea</p>
								</div>
							</div>

						</article>

						<div class="indicadores lg:hidden">
							<div class="indicador activo"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
							<div class="indicador"></div>
						</div>

						<a href="" class="boton-contacto">Agendar Sesión </a>
					</div>
				</article>
			</section>

		</div>
	</section>
</template>

<style scoped>
/* Asegúrate de tener los estilos base de la versión anterior */
.contenct__service {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
}

/* Tus colores personalizados */
.bg-black-app {
	background-color: #1a1a1a;
}





.card__info__sensibilitys {
	max-height: 15rem;
	height: 12rem;
	overflow: hidden;

}

.caracteristica__description h3 {
	text-align: center;
}

@media (width >=1024px) {
	.card__info__sensibilitys {
		max-height: none;
		height: auto;
	}

	.caracteristica__icon {
		flex: 1 0 25%;
	}


	.caracteristica__description h3 {
		text-align: initial;
	}
}

/* ------------------------------------------------------------------------- indicador de los elementos de caracteristica ------------------------------------------------------------------------- */
/* Indicadores */
.indicadores {
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	margin-block: 1rem;
}

.indicador {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.3);
	cursor: pointer;
	transition: all 0.3s;
}

.indicador.activo {
	background: white;
	width: 30px;
	border-radius: 5px;
}



@media (width < 768px) {

	.caracteristica {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		backdrop-filter: blur(12px);
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 2rem;
		border-radius: 1rem;
		gap: 2rem;
		color: white;
	}
}


@media (width >=1024px) {
	.indicador {
		display: none;
	}
}
</style>
