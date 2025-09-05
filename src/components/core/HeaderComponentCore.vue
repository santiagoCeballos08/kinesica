<template>
	<header
		class="container__header__hero flex flex-col items-center p-4 lg:p-10 lg:px-20 lg:py-8 bg-black-app text-white-app sticky top-0 left-0 w-full lg:sticky lg:h-fit lg:flex-row lg:justify-between transition-all"
		:class="active ? 'h-screen' : 'h-fit'"
	>
		<div class="content__icon__button flex w-full lg:w-fit justify-between items-center px-4">
			<figure class="header__icon lg:h-[6rem] lg:w-[6rem]">
				<img
					src="https://placehold.co/60x60/EEE/31343C?font=montserrat"
					alt="logo kinesica"
				/>
			</figure>
			<bars3-center-left-icon class="size-12 cursor-pointer lg:hidden" @click="toggleMenu" />
		</div>
		<nav
			class="header__container__items text-center lg:block"
			:class="active ? 'block' : 'hidden'"
		>
			<ul class="header__navegation__items lg:flex">
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#inicio' }">inicio</router-link>
				</li>
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#quienesSomos' }"
						>Quienes somos
					</router-link>
				</li>
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#nuestrosServicios' }">
						Nuestros servicios
					</router-link>
				</li>
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#profesionales' }"
						>Profesionales
					</router-link>
				</li>
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#planes' }">Planes</router-link>
				</li>
				<li class="header__itmes">
					<router-link :to="{ path: '/', hash: '#contacto' }">Contactanos</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { Bars3CenterLeftIcon } from '@heroicons/vue/20/solid';
import { onMounted, ref } from 'vue';

const active = ref(false);

const toggleMenu = () => {
	if (window.innerWidth < 1024) {
		if (active.value) {
			active.value = false;
		} else {
			active.value = true;
		}
	}
};

// onMounted(() => {});
</script>

<style scoped>
.active-nav {
	height: 100vh;
}
</style>
