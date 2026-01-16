<template>
	<main class="">
		<!-- Hero Section -->
		<section class="relative py-24 bg-gradient-to-r from-main-400 to-main-600 text-white overflow-hidden">
			<div class="absolute inset-0 pattern-dots"></div>
			<div class="container mx-auto px-6 text-center relative z-10">
				<div class="flex justify-center mb-6 animate-fadeInUp">
					<div class="bg-white/20 backdrop-blur-sm p-6 rounded-full">
						<svg class="w-50 h-50 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					</div>
				</div>
				<h1 class=" font-bold mb-6 animate-fadeInUp text-title">
					Tu salud en movimiento<br>
					<span class="text-main-100">Recuperación y Bienestar</span>
				</h1>
				<p class=" mb-8 animate-fadeInUp delay-200">
					Centro especializado en fisioterapia, rehabilitación y entrenamiento funcional
				</p>

			</div>
			<!-- Decorative shapes -->
			<div class="absolute bottom-0 left-0 w-full">
				<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
						fill="#f9fafb" />
				</svg>
			</div>
		</section>
		<!-- Canales de Atención -->
		<section class="py-16 bg-gradient-to-br from-gray-50 to-main-50">
			<div class="container mx-auto px-6">
				<div class="text-center mb-12 animate-fadeInUp">
					<h2 class=" font-bold text-gray-800 mb-4 text-title">Canales de Atención</h2>
					<p class="text-gray-600">Estamos disponibles para atenderte por múltiples vías</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<!-- Teléfono -->
					<div
						class="bg-white p-8 rounded-2xl shadow-lg card-hover animate-fadeInUp delay-100 border-t-4 border-main-400">
						<div
							class="bg-main-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-float mx-auto">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
						</div>
						<h3 class=" font-bold mb-2 text-center">Teléfono</h3>
						<p class="text-gray-600 mb-3 text-center ">Llámanos directamente</p>
						<a href="tel:+573197846786"
							class="text-main-700 font-semibold hover:text-main-900 break-all block text-center">+57 319
							784 67 86</a>
					</div>

					<!-- Email -->
					<div
						class="bg-white p-8 rounded-2xl shadow-lg card-hover animate-fadeInUp delay-200 border-t-4 border-main-400">
						<div
							class="bg-main-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-float mx-auto">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</div>
						<h3 class=" font-bold mb-2 text-center">Email</h3>
						<p class="text-gray-600 mb-3 text-center ">Escríbenos</p>
						<a href="mailto:info@fisiogym.com"
							class="text-main-700 font-semibold hover:text-main-900 break-all  block text-center">info@fisiogym.com</a>
					</div>

					<!-- WhatsApp -->
					<div
						class="bg-white p-8 rounded-2xl shadow-lg card-hover animate-fadeInUp delay-300 border-t-4 border-green-500">
						<div
							class="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-float mx-auto">
							<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
						</div>
						<h3 class=" font-bold mb-2 text-center">WhatsApp</h3>
						<p class="text-gray-600 mb-3 text-center ">Chat directo</p>
						<a href="https://wa.me/573197846786"
							class="text-green-700 font-semibold hover:text-green-900 block text-center">Enviar
							mensaje</a>
					</div>

					<!-- Horario -->
					<div
						class="bg-gradient-to-br from-main-400 to-main-600 p-8 rounded-2xl shadow-lg card-hover animate-fadeInUp delay-400 text-white">
						<div
							class="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-float mx-auto backdrop-blur-sm">
							<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class=" font-bold mb-3 text-center">Horario</h3>
						<div class="space-y-2 text-center">
							<p class="flex items-center justify-center">
								<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd" />
								</svg>
								Lun - Vie: 7:00 - 19:00
							</p>
							<p class="flex items-center justify-center">
								<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
										clip-rule="evenodd" />
								</svg>
								Sáb: 8:00 - 14:00
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Ubicación y Redes Sociales -->
		<section class="py-16 bg-gray-50">
			<div class="container mx-auto px-6">
				<div class="grid md:grid-cols-2 gap-12">
					<!-- Mapa -->
					<div class="animate-slideInLeft">
						<h3 class=" font-bold text-gray-800 mb-6 flex items-center">
							<svg class="w-8 h-8 text-main-600 mr-3" fill="none" stroke="currentColor"
								viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Nuestra Ubicación
						</h3>
						<div class="map-container shadow-xl">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.058!2d-75.556!3d6.338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMTcuMyJOIDc1wrAzMycyMS42Ilc!5e0!3m2!1ses!2sco!4v1234567890"
								width="100%" style="border:0; height:40rem;" allowfullscreen="" loading="lazy">
							</iframe>
						</div>
						<div class="mt-6 p-6 bg-white rounded-lg shadow-md">
							<p class="text-gray-700 flex items-start mb-4">
								<svg class="w-6 h-6 text-main-600 mr-3 mt-1 flex-shrink-0" fill="none"
									stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span><strong>Dirección:</strong><br>Calle 123 #45-67, Bello, Antioquia, Colombia</span>
							</p>
							<p class="text-gray-700 flex items-start">
								<svg class="w-6 h-6 text-main-600 mr-3 mt-1 flex-shrink-0" fill="none"
									stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								<span><strong>Estacionamiento:</strong><br>Disponible para pacientes</span>
							</p>
						</div>
					</div>

					<!-- Redes Sociales -->
					<div class="animate-slideInRight">
						<h3 class=" font-bold text-gray-800 mb-6 flex items-center">
							<svg class="w-8 h-8 text-main-600 mr-3" fill="none" stroke="currentColor"
								viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
							</svg>
							Síguenos
						</h3>
						<div class="bg-white p-8 rounded-2xl shadow-xl">
							<p class="text-gray-600 mb-6">Mantente al día con consejos de salud y bienestar</p>

							<div class="space-y-4">
								<!-- Facebook -->
								<a href="https://facebook.com"
									class="flex items-center p-4 bg-main-50 rounded-lg hover:bg-main-100 transition group">
									<div
										class="bg-main-600 w-12 h-12 rounded-full flex items-center justify-center social-icon">
										<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
										</svg>
									</div>
									<div class="ml-4">
										<span
											class="font-semibold text-gray-700 group-hover:text-main-600 block">Facebook</span>
										<span class=" text-gray-500">Noticias y actualizaciones</span>
									</div>
								</a>

								<!-- Instagram -->
								<a href="https://instagram.com"
									class="flex items-center p-4 bg-main-50 rounded-lg hover:bg-main-100 transition group">
									<div
										class="bg-gradient-to-r from-main-400 to-main-600 w-12 h-12 rounded-full flex items-center justify-center social-icon">
										<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</div>
									<div class="ml-4">
										<span
											class="font-semibold text-gray-700 group-hover:text-main-600 block">Instagram</span>
										<span class=" text-gray-500">Ejercicios y tips</span>
									</div>
								</a>



								<!-- TikTok -->
								<a href="https://tiktok.com"
									class="flex items-center p-4 bg-main-50 rounded-lg hover:bg-main-100 transition group">
									<div
										class="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center social-icon">
										<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
										</svg>
									</div>
									<div class="ml-4">
										<span
											class="font-semibold text-gray-700 group-hover:text-gray-900 block">TikTok</span>
										<span class=" text-gray-500">Videos cortos motivacionales</span>
									</div>
								</a>
							</div>
						</div>


					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
import { PhoneIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped>
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(1.875rem);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes slideInLeft {
	from {
		opacity: 0;
		transform: translateX(-5rem);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes slideInRight {
	from {
		opacity: 0;
		transform: translateX(5rem);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes float {

	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-0.625rem);
	}
}

@keyframes pulse {

	0%,
	100% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.05);
	}
}

@keyframes wave {

	0%,
	100% {
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(-15deg);
	}

	75% {
		transform: rotate(15deg);
	}
}

.animate-fadeInUp {
	animation: fadeInUp 0.8s ease-out forwards;
}

.animate-slideInLeft {
	animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRight {
	animation: slideInRight 0.8s ease-out forwards;
}

.animate-float {
	animation: float 3s ease-in-out infinite;
}

.animate-pulse-custom {
	animation: pulse 2s ease-in-out infinite;
}

.animate-wave {
	animation: wave 1s ease-in-out;
}

.card-hover {
	transition: all 0.3s ease;
}

.card-hover:hover {
	transform: translateY(-0.625rem);
	box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.15);
}

.social-icon {
	transition: all 0.3s ease;
}

.social-icon:hover {
	transform: scale(1.2) rotate(5deg);
}

.delay-100 {
	animation-delay: 0.1s;
}

.delay-200 {
	animation-delay: 0.2s;
}

.delay-300 {
	animation-delay: 0.3s;
}

.delay-400 {
	animation-delay: 0.4s;
}

.gradient-bg {
	background: linear-gradient(135deg, oklch(0.5626 0.1184 187.08) 0%, oklch(0.3798 0.0917 188.53) 100%);
}

.map-container {
	position: relative;
	overflow: hidden;
	border-radius: 1rem;
}

.map-container iframe {
	transition: transform 0.3s ease;
}

.map-container:hover iframe {
	transform: scale(1.05);
}

.pattern-dots {
	background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0.0625rem, transparent 0.0625rem);
	background-size: 1.25rem 1.25rem;
}

.muscle-pattern {
	background-image:
		linear-gradient(45deg, transparent 48%, oklch(0.5626 0.1184 187.08) 48%, oklch(0.5626 0.1184 187.08) 52%, transparent 52%),
		linear-gradient(-45deg, transparent 48%, oklch(0.3798 0.0917 188.53) 48%, oklch(0.3798 0.0917 188.53) 52%, transparent 52%);
	background-size: 3rem 3rem;
	opacity: 0.1;
}

.service-badge {
	position: absolute;
	top: -0.625rem;
	right: -0.625rem;
	background: linear-gradient(135deg, #f59e0b, #f97316);
	color: white;
	font-weight: bold;
	font-size: 0.75rem;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
	animation: pulse 2s ease-in-out infinite;
}
</style>
