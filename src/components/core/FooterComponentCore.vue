<template>
	<footer
		class="content__footer__hero bg-main-800 text-white-app min-h-[30rem] grid lg:grid-cols-4 text-center lg:text-start p-20">
		<section class="col-span-2">
			<figure class="w-fit mx-auto mb-4 max-w-96">
				<img src="/assets/img/logos/logo_white.webp" alt="" />
			</figure>

		</section>

		<article class="content__footer__links col-span-2 flex flex-col lg:flex-row gap-8 justify-around">
			<section class="footer__links__servicios">
				<h3 class="font-semibold">Servicios</h3>
				<ul class="content">
					<li>Fisioterapia Manual</li>
					<li>Rehabilitacion Deportiva</li>
					<li>Electroterapia</li>
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
			<section class="footer__links__contacto">
				<h3 class="font-semibold mb-4">Contacto</h3>
				<ul class="content flex flex-col items-center gap-4">
					<li><a href=""><instagram-icon class="size-20" color="#fff" /></a></li>
					<li><a href="https://www.tiktok.com/@kinesica5?lang=es" target="_blank"><tiktok-icon
								class="size-20" /></a></li>
					<li></li>
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
