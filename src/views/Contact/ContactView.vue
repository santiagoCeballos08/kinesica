<template>
	<main class="container__contact__hero mt-40">
		<section class="container__contact container mx-auto  rounded-2xl ">
			<h1 class="text-[6rem] text-center rotate-4 mb-40 leading-20">Visitanos en nuestro centro <br>
				<span class="font-black ">especialista</span>
			</h1>

			<!-- canales de atencion -->
			<section class="channels__attention">
				<h2 class="text-6xl font-bold text-main-800 text-center">Canales de Atención</h2>
				<p class="text-center">Estos son nuestros canales oficiales de atención al cliente.</p>

				<section class="contact__section flex mt-20">
					<article
						class="contact__link bg-red-300 flex flex-col justify-center rounded-2xl min-h-[40rem] min-w-[40rem] relative">
						<span class="absolute w-full top-10  h-5 bg-linear-to-r from-main-700 to-main "></span>
						<section class="contact__link__information p-4 ">
							<phone-icon
								class="size-30 bg-linear-to-br from-main-700 to-main p-5 text-white rounded-full" />
							<h1>Teléfono</h1>
							<p>llámanos directamente</p>
							<a href="tel:+57">+57 319 784 67 86</a>
						</section>
					</article>
				</section>
			</section>
		</section>

	</main>
</template>

<script setup>
import { PhoneIcon } from '@heroicons/vue/24/outline';
</script>

<style scoped></style>
