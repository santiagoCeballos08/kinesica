<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


// vairables de horizontales
const horizontalSection = ref(null)
const scrollContainer = ref(null)

// iniciamos el scroll horizontal
onMounted(() => {
	const sections = gsap.utils.toArray('.contenct__service')
	const totalWidth = scrollContainer.value.scrollWidth
	const viewportWidth = window.innerWidth
	const scrollDistance = totalWidth - viewportWidth

	gsap.to(scrollContainer.value, {
		x: () => -scrollDistance,
		ease: 'none',
		scrollTrigger: {
			trigger: horizontalSection.value,
			start: 'top top',
			end: () => `+=${scrollDistance}`,
			scrub: true,
			pin: true,
			anticipatePin: 1,
			invalidateOnRefresh: true
		}
	})
})

</script>


<template>
	<section ref="horizontalSection" class="content__hero__servicios h-screen overflow-hidden">
		<section ref="scrollContainer" class="content__servicios flex h-full w-max ">

			<section class="contenct__service">
				<article class="card__services">
					<picture class="card__img">
						<img src="/assets/presoTerapia.webp" alt="imagen de presoterapia" class="max-w-[40rem]">
					</picture>
					<div class="card__info">
						<h2 class="card__info__title">Que es la <span>Preso terapia</span> </h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis temporibus tenetur
							atque
							aperiam laboriosam, adipisci mollitia itaque corrupti tempore nam saepe unde labore nihil?
							Libero commodi voluptate nihil neque nostrum?
						</p>

					</div>
				</article>
			</section>
			<section class="contenct__service">
				<p>panel 2</p>
			</section>
			<section class="contenct__service">
				<p>panel 3</p>
			</section>

		</section>
	</section>
</template>

<style scoped>
.contenct__service {
	flex: 0 0 100vw;
	/* cada panel ocupa el ancho de la ventana */
	height: 100vh;
	display: flex;
	padding: 2rem;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	background: var(--color-black-app);
	color: white;

}


.card__services {
	display: flex;
	flex-direction: column;
	max-width: 180rem;
	width: 90%;
}

@media (width > 1024px) {
	.card__services {
		flex-direction: row;
	}
}

.card__services .card__info .card__info__title span {
	font-weight: 800;
}
</style>
