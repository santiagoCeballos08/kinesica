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
	const sections = gsap.utils.toArray('.panel')
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

			<div class="panel">
				<p>panel 1</p>
			</div>
			<div class="panel">
				<p>panel 2</p>
			</div>
			<div class="panel">
				<p>panel 3</p>
			</div>

		</section>
	</section>
</template>

<style scoped>
.panel {
	flex: 0 0 100vw;
	/* cada panel ocupa el ancho de la ventana */
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	background: #222;
	color: white;
	border-right: 2px solid #333;
}
</style>
