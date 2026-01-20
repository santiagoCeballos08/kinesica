<script setup>
import InstagramIcon from '@/assets/icons/InstagramIcon.vue';
import FacebookIcon from '../../../assets/icons/FacebookIcon.vue';
import LinkedingIcon from '@/assets/icons/LinkedingIcon.vue';
import { reactive, markRaw } from 'vue';


const profesionales = markRaw([
	{
		name: 'Camila Gaviria',
		profesion: 'Profesional Fisioterapeuta',
		picture: '/assets/img/profesionals/Camila.webp',
		socials: [
			{
				social: 'instagram',
				link: '#',
				icon: InstagramIcon
			},
			{
				social: 'facebook',
				link: '#',
				icon: FacebookIcon
			},
			{
				social: 'linkeding',
				link: '#',
				icon: LinkedingIcon
			}
		]

	},
	{
		name: 'Samuel Gaviria',
		profesion: 'Entrenador Profesional ',
		picture: '/assets/img/profesionals/samuel.webp',
		socials: [
			{
				social: 'instagram',
				link: '#',
				icon: InstagramIcon
			},
			{
				social: 'facebook',
				link: '#',
				icon: FacebookIcon
			},
			{
				social: 'linkeding',
				link: '#',
				icon: LinkedingIcon
			}
		]

	}
])

</script>


<template>
	<section class="content__profesionals__hero bg-main-50 p-10" id="profesionales">
		<section class="content_title max-w-app mx-auto p-10">
			<h2 class="text-4xl font-semibold bg-main text-white-app w-fit p-4">Equipo de trabajo</h2>
			<h2 class="text-title font-bold">Profesionales</h2>

		</section>
		<section class="content__prosionals max-w-app grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-10">
			<article class="card__profesional " v-for="profesional in profesionales">
				<figure class="overflow-hidden ">
					<img :src="profesional.picture == '' ? 'https://placehold.co/600x600' : profesional.picture"
						alt="imagen de profesional de kinesica"
						class="hover:scale-125 transition-all object-cover  hover:rotate-10 h-[40rem] md:h-[78rem] ">
				</figure>
				<article class="card__info">
					<h2 class="card__info__title">{{ profesional.profesion }} </h2>
					<h3 class="card__info__name">{{ profesional.name }}</h3>
					<ul class="card__info__redes">
						<li v-for="redes in profesional.socials">
							<a :href="redes.link" :aria-label="redes.social">
								<component :is="redes.icon" color="oklch(0.3142 0.0765 188.33)" class="size-15" />
							</a>
						</li>


					</ul>
				</article>
			</article>


		</section>
	</section>
</template>



<style scoped></style>
