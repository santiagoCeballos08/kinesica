<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


// vairables de horizontales
const horizontalSection = ref(null)
const scrollContainer = ref(null)

// iniciamos el scroll horizontal
// iniciamos el scroll horizontal
onMounted(() => {
	const sections = gsap.utils.toArray('.contenct__service')
	const totalWidth = scrollContainer.value.scrollWidth
	const viewportWidth = window.innerWidth
	const scrollDistance = totalWidth - viewportWidth

	const scrollTween = gsap.to(scrollContainer.value, {
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

	sections.forEach((section, index) => {
		const img = section.querySelector('.card__img')
		const text = section.querySelector('.card__info')

		if (img) {
			gsap.from(img, {
				y: -100,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: index === 0 ? horizontalSection.value : section,
					containerAnimation: index === 0 ? null : scrollTween,
					start: index === 0 ? 'top 60%' : 'left center',
					toggleActions: 'play none none reverse'
				}
			})
		}

		if (text) {
			gsap.from(text, {
				y: 100,
				opacity: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: index === 0 ? horizontalSection.value : section,
					containerAnimation: index === 0 ? null : scrollTween,
					start: index === 0 ? 'top 60%' : 'left center',
					toggleActions: 'play none none reverse'
				}
			})
		}
	})
})

</script>


<template>
	<section ref="horizontalSection" class="content__hero__servicios h-screen overflow-hidden mb-10">
		<section ref="scrollContainer" class="content__servicios flex h-full w-max ">

			<section class="contenct__service">
				<article class="card__services">
					<picture class="card__img  max-w-[40rem] lg:max-w-[80rem]">
						<img src="/assets/presoTerapia.webp" alt="imagen de presoterapia" class="object-contain w-full">
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
	min-height: 100vh;
	display: flex;
	padding: 2rem;
	align-items: center;
	justify-content: center;

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
		font-size: 3rem;
	}
}

.card__services .card__info .card__info__title span {
	font-weight: 800;
}

.card__services .card__info .card__info__title {
	font-size: 2.5rem;
	margin-bottom: 2rem;
}
</style>
