<script setup>
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import FacebookIcon from '../../../assets/icons/FacebookIcon.vue';
import LinkedingIcon from '@/assets/icons/LinkedingIcon.vue';
</script>


<template>
	<section class="content__profesionals__hero">
		<section class="content_title max-w-app mx-auto p-10">
			<h2 class="text-4xl font-semibold bg-main text-white-app w-fit p-4">Equipo de trabajo</h2>
			<h2 class="text-title font-bold">Profesionales</h2>

		</section>
		<section class="content__prosionals max-w-app grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
			<article class="card__profesional ">
				<figure class="overflow-hidden ">
					<img src="https://placehold.co/600x600" alt="imagen de profesional de kinesica"
						class="hover:scale-125 transition-all hover:rotate-10">
				</figure>
				<article class="card__info">
					<h2 class="card__info__title">Profesional Fisioterapeuta </h2>
					<h3 class="card__info__name">Camila Gavria</h3>
					<ul class="card__info__redes">
						<li>
							<a href=""><facebook-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /></a>
						</li>
						<li>
							<a href=""><instagram-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /> </a>
						</li>
						<li>
							<a href=""><linkeding-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /> </a>
						</li>
					</ul>
				</article>
			</article>
			<article class="card__profesional ">
				<figure class=" overflow-hidden">
					<img src="https://placehold.co/600x600" alt="imagen de profesional de kinesica"
						class="hover:scale-125 transition-all hover:rotate-10">
				</figure>
				<article class="card__info">
					<h2 class="card__info__title">Profesional Trainer </h2>
					<h3 class="card__info__name">Camila Gavria</h3>
					<ul class="card__info__redes">
						<li>
							<a href=""><facebook-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /></a>
						</li>
						<li>
							<a href=""><instagram-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /> </a>
						</li>
						<li>
							<a href=""><linkeding-icon color="oklch(0.3142 0.0765 188.33)" class="size-15" /> </a>
						</li>
					</ul>
				</article>
			</article>


		</section>
	</section>
</template>



<style scoped></style>
