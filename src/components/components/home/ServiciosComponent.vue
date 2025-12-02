<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
				// 1. Animación de Entrada (Modificada para parallax)
				gsap.fromTo(imgEl,
					{
						scale: 1.4, // Empezamos un poco más grande
						opacity: 0,
						filter: 'blur(10px)',
						rotation: -5
					},
					{
						// --- CAMBIO CLAVE AQUÍ ---
						// En lugar de scale: 1, lo dejamos en 1.15.
						// Esto asegura que la imagen siempre sea más grande que el contenedor,
						// permitiendo que se mueva sin dejar huecos.
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

				// 2. NUEVA: Animación de Parallax Horizontal
				// Esta animación corre en paralelo y mueve la imagen dentro de su caja
				gsap.fromTo(imgEl,
					{
						xPercent: -15 // Empieza desplazada a la izquierda dentro de su caja
					},
					{
						xPercent: 15, // Termina desplazada a la derecha
						ease: 'none', // El parallax siempre debe ser lineal ('none')
						scrollTrigger: {
							trigger: imgWrapper, // Usamos el wrapper como trigger
							containerAnimation: scrollTween, // Vinculado al scroll principal
							// El parallax debe durar TODO el tiempo que el elemento es visible
							start: 'left right', // Empieza cuando el borde IZQUIERDO del wrapper entra por la DERECHA del viewport
							end: 'right left',   // Termina cuando el borde DERECHO del wrapper sale por la IZQUIERDA
							scrub: true,         // Sincroniza la animación con la velocidad del scroll
							// markers: true     // Activa para depurar si lo necesitas
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
		});

	}, horizontalSection.value);
});

onUnmounted(() => {
	if (ctx) ctx.revert();
});
</script>

<template>
	<section ref="horizontalSection" class="relative overflow-hidden">
		<div ref="scrollContainer" class="flex w-max h-screen">

			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="/public/assets/presoTerapia.webp" alt="presoterapia"
							class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-4xl lg:text-6xl font-bold mb-6">
							Qué es la <span class="text-main-400">Presoterapia</span>
						</h2>
						<p class="text-lg lg:text-4xl leading-relaxed text-gray-300">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus tenetur
							atque aperiam laboriosam.
						</p>
						<article class="card__info__sensibilitys ">
							<h2>secciones principales</h2>
						</article>

						<button class="boton-contacto">Agendar Sesión</button>
					</div>
				</article>
			</section>

			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="" alt="otra imagen" class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-4xl lg:text-6xl font-bold mb-6">
							Beneficios <span class="text-main-400">Naturales</span>
						</h2>
						<p class="text-lg lg:text-4xl leading-relaxed text-gray-300">
							Adipisci mollitia itaque corrupti tempore nam saepe unde labore nihil?
							Libero commodi voluptate nihil neque nostrum?
						</p>
					</div>
				</article>
			</section>

			<section class="contenct__service bg-black-app text-white">
				<article
					class="card__services flex flex-col lg:flex-row items-center gap-10 w-11/12 max-w-[200rem] mx-auto">
					<picture class="card__img w-full lg:w-1/2 overflow-hidden rounded-xl">
						<img src="" alt="tercera imagen" class="object-cover w-full h-full">
					</picture>
					<div class="card__info w-full lg:w-1/2">
						<h2 class="card__info__title text-4xl lg:text-6xl font-bold mb-6">
							Resultados <span class="text-main-400">Garantizados</span>
						</h2>
						<p class="text-lg lg:text-4xl leading-relaxed text-gray-300">
							Perspiciatis temporibus tenetur atque aperiam laboriosam.
						</p>
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

.text-main-400 {
	color: #3b82f6;
}
</style>
