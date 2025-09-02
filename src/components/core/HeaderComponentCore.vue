<template>
	<header
		class="container__header__hero flex flex-col items-center p-10 lg:px-20 lg:py-8 bg-black-app text-white-app fixed top-0 left-0 w-full h-screen lg:sticky lg:h-fit lg:flex-row lg:justify-between"
	>
		<figure class="header__icon h-[10rem] w-[10rem] lg:h-[6rem] lg:w-[6rem]">
			<img src="" alt="logo kinesica" />
		</figure>
		<nav class="header__container__items text-center">
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
</script>

<style lang="scss" scoped></style>
