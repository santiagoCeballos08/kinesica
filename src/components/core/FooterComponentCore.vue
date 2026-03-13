<template>
	<footer
		class="content__footer__hero bg-main-800 text-white-app min-h-[30rem] grid lg:grid-cols-4 text-center lg:text-start p-20 ">
		<section class="flex justify-center lg:justify-start mb-10 md:mb-0 col-span-2">
			<figure class=" mb-4 max-w-96">
				<img src="/assets/img/logos/logo_white.webp" alt="" />
			</figure>

		</section>

		<article class="content__footer__links col-span-2 flex flex-col lg:flex-row gap-8 justify-end">

			<section class="flex gap-4 justify-between text-start">
				<section class="footer__links__servicios">
					<h3 class="font-semibold">Nuestros Servicios</h3>
					<ul class="content">
						<li>Entrenamiento Funcional</li>
						<li>Fisioterapia</li>
						<li>Presoterapia</li>
						<li>Masoterapia</li>
					</ul>
				</section>


				<section class="footer__links__enlaces">
					<h3 class="font-semibold">Enlaces</h3>
					<ul class="content">
						<li>
							<router-link class="hover:underline underline-offset-4"
								:to="{ path: '/', hash: '#inicio' }">Inicio</router-link>
						</li>
						<li>
							<router-link class="hover:underline underline-offset-4"
								:to="{ path: '/', hash: '#services' }">Servicios</router-link>
						</li>
						<li>
							<router-link class="hover:underline underline-offset-4"
								:to="{ path: '/', hash: '#profesionales' }">Profesionales</router-link>
						</li>
						<li>
							<router-link class="hover:underline underline-offset-4"
								:to="{ path: '/', hash: '#precios' }">Planes</router-link>
						</li>
						<li>
							<router-link class="hover:underline underline-offset-4"
								:to="{ path: '/contacto', hash: '' }">Contacto</router-link>
						</li>
					</ul>
				</section>
			</section>



			<section class="footer__links__contacto">
				<h3 class="font-semibold mb-4 capitalize">Siguenos en nuestras redes</h3>
				<ul class="content flex flex-row justify-center  items-start gap-4">
					<li><a href="https://www.instagram.com/kinesica.fisioterapia"><instagram-icon class="size-20" color="#fff" /></a></li>
					<li><a href="https://www.facebook.com/profile.php?id=61577351925960"><facebook-icon class="size-20" color="#fff" /></a></li>
					<li><a href="https://www.facebook.com/profile.php?id=61577351925960"><tiktok-icon class="size-20" color="#fff" /></a></li>
				</ul>
			</section>
		</article>
	</footer>
	<section class="content__derechos bg-main-100 text-[1.2rem] flex flex-col text-center">
		<p>Kinsesica© Todos los derechos reservados {{ year }}</p>
		<p>
			Desarrollado por
			<a href="https://github.com/santiagoCeballos08" name="nombreDesarrollador">Santiago ceballos</a>
		</p>
	</section>
</template>

<script setup>
// icono de redes sociales
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import TiktokIcon from '@/assets/icons/tiktokIcon.vue';
import FacebookIcon from '@/assets/icons/FacebookIcon.vue';


import { format } from '@formkit/tempo';
import { onMounted, ref } from 'vue';

const year = ref('')


// cuando el componente se genere
onMounted(() => {
	const date = new Date();
	year.value = format(date, 'YYYY');
});
</script>

<style scoped>
.content__footer__links section li {
	opacity: 70%;
}
</style>
