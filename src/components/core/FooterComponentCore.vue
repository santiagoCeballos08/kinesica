<template>
	<footer
		class="content__footer__hero bg-main-900 text-white-app min-h-[30rem] grid lg:grid-cols-4 text-center lg:text-start p-20">
		<section class="col-span-2">
			<figure class="w-fit mx-auto mb-4 max-w-50">
				<img src="/assets/logo.webp" alt="" />
			</figure>
			<p class="line-clamp-3 w-1/2 mx-auto mb-4 text-center">
				Tu centro de fisioterapia de confianza para una recuperacion integral y bienestar
				completo.
			</p>
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
							:to="{ path: '/', hash: '' }">Inicio</router-link>
					</li>
					<li>
						<router-link class="hover:underline underline-offset-4"
							:to="{ path: '/', hash: '' }">Servicios</router-link>
					</li>
					<li>
						<router-link class="hover:underline underline-offset-4"
							:to="{ path: '/', hash: '' }">Profesionales</router-link>
					</li>
					<li>
						<router-link class="hover:underline underline-offset-4"
							:to="{ path: '/', hash: '' }">Planes</router-link>
					</li>
					<li>
						<router-link class="hover:underline underline-offset-4"
							:to="{ path: '/', hash: '' }">Contacto</router-link>
					</li>
				</ul>
			</section>
			<section class="footer__links__contacto">
				<h3 class="font-semibold">Contacto</h3>
				<ul class="content">
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</section>
		</article>
	</footer>
	<section class="content__derechos bg-white/50 text-[1.2rem] flex flex-col text-center">
		<p>Kinsesica© Todos los derechos reservados {{ year }}</p>
		<p>
			Desarrollado por
			<a href="https://github.com/santiagoCeballos08" name="nombreDesarrollador">Santiago ceballos</a>
		</p>
	</section>
</template>

<script setup>
import { format } from '@formkit/tempo';
import { onMounted } from 'vue';

// cuando el componente se genere
onMounted(() => {
	const date = new Date();
	const year = format(date, 'YYYY');
});
</script>

<style scoped>
.content__footer__links section li {
	opacity: 70%;
}
</style>
