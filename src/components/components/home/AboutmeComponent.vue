<template>
	<section class="about max-w-app mx-auto mb-40" id="quienesSomos">
		<span class="title-section about__label mb-10">Quienes somos</span>

		<article class="about__grid grid grid-cols-1 lg:grid-cols-2 gap-20">
			<!-- Image -->
			<div class="about__image flex justify-center">
				<img
					src="/assets/img/quienesSomos.webp"
					alt="imagen de quienes somos kinesica"
					class="about__img w-10/12 lg:w-full shadow-2xl shadow-main-600/50 rounded-2xl" />
			</div>

			<!-- Content -->
			<article class="about__content p-10">
				<h2 class="about__title text-title font-bold mb-10 text-main-700">Quienes somos en Kinesica</h2>
				<p v-fade-scroll class="about__text text-justify mb-6">
					KINESICA es una marca creada por Camila Torres Fisioterapeuta con más de 7 años de experiencia.
					Nuestra propuesta nace desde la necesidad de una atención personalizada con un enfoque humano,
					empático y altamente profesional, combinando el uso de tecnología que te ayuda a regresar a tu
					cotidianidad. Transformamos la salud física de nuestros pacientes desde la comprensión, el
					compromiso y la experiencia, mejorando su calidad de vida y funcionalidad corporal.
				</p>

				<h3 class="about__title text-title font-bold mb-10 text-main-700">Nuestra experiencia</h3>
				<p v-fade-scroll class="about__text text-justify mb-6">
					Son 7 años acompañando los procesos de recuperación física y emocional de muchas personas en
					diferentes situaciones de su vida, desde el sedentarismo hasta el tratamiento de lesiones musculo
					esqueléticas. Recuperando así la autonomía en actividades de la vida diaria.
				</p>

				<button class="about__open-btn mx-auto mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white cursor-pointer" @click="showModal = true">
					<span>Ver más sobre nosotros</span>
					<video-icon />
				</button>
			</article>
		</article>
	</section>

	<!-- Modal -->
	<ModalComponent v-model="showModal">
		<template #header>
			<div class="modal-about__header flex items-center gap-6">
				<div class="modal-about__icon flex items-center justify-center shrink-0 w-22 h-22 rounded-2xl">
					<HeartIcon class="modal-about__icon-svg size-11" />
				</div>
				<div>
					<h3 class="modal-about__title  font-bold text-white mb-1">Kinesica</h3>
					<p class="modal-about__subtitle ">Video</p>
				</div>
			</div>
		</template>

		<!-- Body -->
		<div class="modal-about__body flex flex-col items-center gap-6">
			<h4 class="modal-about__video-title font-semibold text-white/90 text-center">
				Conoce más sobre Kinesica
			</h4>

			<!-- Vertical video container (9:16) -->
			<div class="modal-about__video-wrapper relative w-full flex justify-center  mx-auto rounded-2xl bg-black/30">
				<!-- Replace src with your actual video URL -->
				<video
					class="object-cover h-full rounded-xl"
					controls
					playsinline
					poster="">
					<source src="/public/assets/banner.webm" type="video/webm" />
				</video>
			</div>
		</div>

	</ModalComponent>
</template>

<script setup>
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import ModalComponent from '@/components/core/ModalComponent.vue';
import { Video as videoIcon } from 'lucide-vue-next';

const showModal = ref(false);
</script>

<style scoped>
/* ── Open button ─────────────────────── */
.about__open-btn {
	background: var(--color-main-600);
	border: none;
	transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
}

.about__open-btn:hover {
	background: var(--color-main-700);
	box-shadow: 0 8px 28px color-mix(in oklch, var(--color-main-600) 40%, transparent);
	transform: translateY(-2px);
}

.about__open-btn:active {
	transform: translateY(0);
}

.about__open-btn__icon {
	transition: transform 0.2s ease;
}

.about__open-btn:hover .about__open-btn__icon {
	transform: translateX(4px);
}

/* ── Modal icon ──────────────────────── */
.modal-about__icon {
	background: rgba(192, 231, 225, 0.15);
	border: 1px solid rgba(192, 231, 225, 0.25);
	color: #c0e7e1;
}

/* ── Modal divider ───────────────────── */
.modal-about__divider {
	background: rgba(192, 231, 225, 0.12);
}

/* ── Modal row labels / values ───────── */
.modal-about__row-label {
	color: rgba(192, 231, 225, 0.5);
}

.modal-about__row-value {
	color: rgba(255, 255, 255, 0.9);
}

/* ── Badge ───────────────────────────── */
.modal-about__badge {
	background: rgba(192, 231, 225, 0.12);
	border: 1px solid rgba(192, 231, 225, 0.3);
	color: #c0e7e1;
}

.modal-about__badge-text {
	color: rgba(255, 255, 255, 0.45);
}

.modal-about__subtitle {
	color: rgba(192, 231, 225, 0.6);
}

/* ── Video ───────────────────────────── */
.modal-about__video-title {
	letter-spacing: 0.01em;
}

.modal-about__video-wrapper {
	border: 1px solid rgba(192, 231, 225, 0.15);
	box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
	aspect-ratio: 9 / 16;
}
</style>

