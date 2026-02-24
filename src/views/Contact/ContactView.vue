<template>
	<main class="">
		<!-- Hero Section -->
		<section
			class="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
			<!-- Patrón de líneas diagonales estilo gym -->
			<div class="absolute inset-0 gym-stripes opacity-10"></div>
			<div class="absolute inset-0 bg-gradient-to-b from-transparent via-main-600/10 to-transparent"></div>

			<!-- Elementos decorativos estilo fitness -->
			<div
				class="absolute top-10 left-10 w-32 h-32 border-4 border-main-500/20 rounded-lg rotate-45 animate-pulse-custom">
			</div>
			<div
				class="absolute bottom-20 right-10 w-40 h-40 border-4 border-main-400/20 rounded-lg rotate-12 animate-float">
			</div>
			<div class="absolute top-1/2 left-1/4 w-2 h-2 bg-main-500 rounded-full animate-pulse-custom"></div>
			<div class="absolute top-1/3 right-1/3 w-3 h-3 bg-main-400 rounded-full animate-pulse-custom delay-200">
			</div>

			<div class="container mx-auto px-6 relative z-10">
				<div class="max-w-4xl mx-auto">
					<!-- Badge superior -->
					<div class="flex justify-center mb-6 animate-fadeInUp">
						<div
							class="inline-flex items-center gap-3 bg-main-600/20 backdrop-blur-md border border-main-500/30 px-6 py-3 rounded-full">
							<svg class="w-6 h-6 text-main-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							<span class="text-sm font-bold tracking-widest uppercase text-main-300">Energía · Fuerza ·
								Salud</span>
						</div>
					</div>

					<!-- Título principal -->
					<h1
						class="text-5xl md:text-7xl font-black mb-6 animate-fadeInUp text-center uppercase tracking-tight">
						<span class="block text-white drop-shadow-lg">¡Actívate con</span>
						<span
							class="block bg-gradient-to-r from-main-400 via-main-500 to-main-600 bg-clip-text text-transparent drop-shadow-2xl">
							Nosotros!
						</span>
					</h1>

					<!-- Subtítulo -->
					<p
						class="text-xl md:text-2xl mb-8 animate-fadeInUp delay-200 text-center text-gray-300 font-semibold">
						<span class="text-main-400">Fisioterapia</span> ·
						<span class="text-main-300">Rehabilitación</span> ·
						<span class="text-main-400">Entrenamiento</span>
					</p>

					<!-- CTA Button -->
					<div class="flex justify-center gap-4 animate-fadeInUp delay-300 mb-8">
						<a href="#contacto"
							class="group relative px-8 py-4 bg-main-600 hover:bg-main-500 rounded-lg font-bold text-3xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-main-500/50">
							<span class="relative z-10">Contáctanos</span>
							<div
								class="absolute inset-0 bg-white/20 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
							</div>
						</a>
					</div>

					<!-- Stats rápidos -->
					<div class="grid grid-cols-2 gap-6 max-w-2xl mx-auto animate-fadeInUp delay-400">
						<div class="text-4xl text-center border-l-2 border-main-500/50">
							<div class=" text-5xl font-black text-main-400">+5</div>
							<div class="text-gray-400 uppercase tracking-wider mt-1">Años</div>
						</div>
						<div class=" text-4xl text-center border-l-2 border-main-500/50">
							<div class="text-5xl font-black text-main-400">+500</div>
							<div class=" text-gray-400 uppercase tracking-wider mt-1">Clientes</div>
						</div>

					</div>
				</div>
			</div>

			<!-- Decorative shapes bottom -->
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
							<Phone class="w-8 h-8 text-white" />
						</div>
						<h3 class=" font-semibold mb-2 text-center">Teléfono</h3>
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
							<Mail class="w-8 h-8 text-white" />
						</div>
						<h3 class=" font-semibold mb-2 text-center">Email</h3>
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
						<h3 class=" font-semibold mb-2 text-center">WhatsApp</h3>
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
						<h3 class=" font-semibold mb-3 text-center">Horario</h3>
						<div class="space-y-2 text-center">
							<p class="flex items-center justify-center">
								<Clock4 class="w-4 h-4 mr-2" />
								Lun - Vie: 7:00 - 19:00
							</p>
							<p class="flex items-center justify-center">

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
				<div class="grid lg:grid-cols-3 gap-12">
					<!-- Mapa -->
					<div class="animate-slideInLeft col-span-2">
						<h3 class=" font-bold text-gray-800 mb-6 flex items-center">
							<MapPin class="w-8 h-8 text-main-600 mr-3" />
							Nuestra Ubicación
						</h3>
						<div class="map-container shadow-xl relative">
							<div id="map" class="h-[40rem] w-full rounded-2xl top-0 z-10"></div>

							<a href="https://maps.app.goo.gl/p99phJ6acHndsJnf6" target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-main-600 hover:bg-main-500 text-white rounded-full shadow-lg hover:shadow-main-500/50 transition-all duration-300 hover:scale-105 font-semibold  whitespace-nowrap">
								Ir a ubicación
								<Send class="w-5 h-5 flex-shrink-0" />
							</a>
						</div>
						<div class="mt-6 p-6 bg-white rounded-lg shadow-md">
							<p class="text-gray-700 flex items-start mb-4">
								<MapPinned class="w-6 h-6 text-main-600 mr-3 mt-1 flex-shrink-0" />
								<span><strong>Dirección:</strong><br>Carrera 65 42-105, Medellín 050031,
									Antioquia,Colombia</span>
							</p>

						</div>

					</div>

					<!-- Redes Sociales -->
					<div class="animate-slideInRight">
						<h3 class=" font-bold text-gray-800 mb-6 flex items-center">
							<MessageSquareHeart class="w-8 h-8 text-main-600 mr-3" />
							Síguenos
						</h3>
						<div class="bg-white p-8 rounded-2xl shadow-xl">
							<p class="text-gray-600 mb-6">Mantente al día con consejos de salud y bienestar</p>

							<div class="space-y-4">
								<!-- Facebook -->
								<a href="https://www.facebook.com/profile.php?id=61577351925960&mibextid=wwXIfr&rdid=yGEHM6adFEGRXoy3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AzYL2EWBK%2F%3Fmibextid%3DwwXIfr#"
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
								<a href="https://www.instagram.com/kinesica.fisioterapia"
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
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// importamos iconos para la vista
import { MapPinned, MapPin, MessageSquareHeart, Phone, Mail, Clock4, Send } from 'lucide-vue-next';

// Fix para los iconos de Leaflet en Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

onMounted(() => {
	// Coordenadas de Bello, Antioquia, Colombia
	const belleCoords = [6.247035000949332, -75.58380414510992];
	// Inicializar el mapa
	const map = L.map('map').setView(belleCoords, 15);

	// Agregar capa de tiles (OpenStreetMap)
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 19,
	}).addTo(map);

	// Agregar marcador con popup
	const marker = L.marker(belleCoords).addTo(map);
	marker.bindPopup('<b>Kinesica</b><br>Carrera 65 42-105, Medellín 050031, Antioquia, Colombia<br>Bello, Antioquia').openPopup();
});
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

.map-container:hover {
	box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.2);
	transform: scale(1.02);
	transition: all 0.3s ease;
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
